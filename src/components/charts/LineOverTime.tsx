import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const queryString = require('query-string');

type LineOverTimeProps = {data: any[], chartId: string, media?: string}

const LineOverTime = (props: LineOverTimeProps) => {

    const parsed = queryString.parse(window.location.search);
    const {data, chartId, media} = props
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
            console.log('all data', formatted)
            setFormattedDates(formatted)
        }
    }, [data])


    useLayoutEffect(() => {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create(chartId, am4charts.XYChart);

        chart.colors.step = 4;

        chart.data = formattedDates;

// Create axes
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.minGridDistance = 60;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
        const createAxisAndSeries = (field: string, name: string, opposite: boolean) => {
            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = field;
            series.dataFields.dateX = "date";
            series.strokeWidth = 2;
            series.yAxis = valueAxis;
            series.name = name;
            series.tooltipText = "{name}: [bold]{valueY}[/]";
            series.tensionX = 0.8;
            series.showOnInit = true;
        }
        data.forEach(per => createAxisAndSeries(per.name, per.name, false))

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();

        let title = chart.titles.create();
        if (formattedDates.length > 0) {
            title.text = `Топ 5 имен ${media ?? ""} за (${formattedDates[formattedDates.length-1].date} - ${formattedDates[0].date})`;
        }
        else {
            title.text = 'Топ 5 имен'
        }
        title.fontSize = 20;
        title.fontWeight = "800";

        chartTest.current = chart

        return () => {
            chart.dispose();
        };
    }, [formattedDates]);

    return (
        <div id={chartId} style={{width: "100%", height: "500px"}}></div>
    )
}

export default LineOverTime