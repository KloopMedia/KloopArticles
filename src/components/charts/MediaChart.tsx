import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {WordCloud, WordCloudSeries} from "@amcharts/amcharts4/plugins/wordCloud";
import * as am4charts from "@amcharts/amcharts4/charts";
import {cos} from "@amcharts/amcharts4/.internal/core/utils/Math";


const MediaChart = (props: { data: any[] }) => {
    const {data} = props
    const chartTest = useRef<any>(null);
    const [formattedDates, setFormattedDates] = useState<any>([])


    useEffect(() => {
        if (data.length > 0) {
            let allData: any = {}
            data.forEach(per => {
                const dates = per.dates

                Object.keys(dates).forEach(date => allData[date] = {
                    ...allData[date],
                    date: date,
                    [per.name]: dates[date]
                })
            })
            // @ts-ignore
            let formatted = Object.values(allData).sort((a, b) => new Date(b.date) - new Date(a.date))
            console.log('media all data', formatted)
            setFormattedDates(formatted)
        }
    }, [data])


    useLayoutEffect(() => {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create("mediadiv", am4charts.XYChart);
        chart.colors.step = 4;

        chart.data = formattedDates

        // Create axes
        let xAxis = chart.xAxes.push(new am4charts.DateAxis());
        // xAxis.renderer.minGridDistance = 50;

        let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
        // yAxis.renderer.minGridDistance = 50;

        const createAxisAndSeries = (field: string, name: string, opposite: boolean) => {
            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = field;
            series.dataFields.dateX = "date";
            series.dataFields.value = field;
            series.strokeOpacity = 0;
            series.name = name;

            let bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.strokeOpacity = 0.2;
            bullet.stroke = am4core.color("#ffffff");
            bullet.nonScalingStroke = true;
            bullet.tooltipText = "{name}:{value}";
            series.heatRules.push({
                target: bullet.circle,
                min: 10,
                max: 60,
                property: "radius"
            });
        }
        data.forEach(per => createAxisAndSeries(per.name, per.name, false))

        // chart.scrollbarX = new am4core.Scrollbar();
        // chart.scrollbarY = new am4core.Scrollbar();

        chart.legend = new am4charts.Legend();

        chartTest.current = chart

        return () => {
            chart.dispose();
        };
    }, [data]);

    return (
        <div id="mediadiv" style={{width: "100%", height: "500px"}}></div>
    )
}

export default MediaChart