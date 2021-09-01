import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {useQuery} from "@apollo/client";
import {uniquePerFormatter} from "../../util/Util";
import {MediaAndCountQuery, NameAndCountListQuery, NameAndCountQuery} from "../../util/Queries";
import {CircularProgress} from "@material-ui/core";

const queryString = require('query-string');


const LineOverTime = () => {
    const chartTest = useRef<any>(null);
    const [formattedDates, setFormattedDates] = useState<any>([])
    const [formattedData, setFormattedData] = useState<any>([])
    const {start, end, media, pers} = queryString.parse(window.location.search, {arrayFormat: 'bracket'});

    let sliceSize = 5

    console.log(start, end, media, pers)

    let query = NameAndCountQuery
    if (media) {
        query = MediaAndCountQuery
    }
    else if (pers) {
        query = NameAndCountListQuery
        if (!media && pers.length > 0) {
            sliceSize = pers.length
        }
    }

    const {
        loading,
        error,
        data: incomingData,
        refetch
    } = useQuery(query, {
        variables: {
            startDate: start + " 00:00:00",
            endDate: end + " 24:00:00",
            media: media ?? "",
            pers: pers ?? []
        },
        notifyOnNetworkStatusChange: true,
    });


    useEffect(() => {
        if (incomingData) {
            console.log(incomingData)
            const data = uniquePerFormatter(incomingData.unique_per).slice(0, sliceSize)
            console.log(data)

            if (data.length > 0) {
                setFormattedData(data)

                let allData: any = {}
                data.forEach((per: any) => {
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
        }

    }, [incomingData])


    useLayoutEffect(() => {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create("linechart", am4charts.XYChart);

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
        formattedData.forEach((per: any) => createAxisAndSeries(per.name, per.name, false))

        // Add legend
        chart.legend = new am4charts.Legend();

        // Add cursor
        chart.cursor = new am4charts.XYCursor();

        let title = chart.titles.create();
        if (formattedDates.length > 0) {
            title.text = `Топ ${sliceSize} имен ${media ?? ""} за (${start} - ${end})`;
        } else {
            title.text = 'Топ 5 имен'
        }
        title.fontSize = 18;
        title.fontWeight = "700";

        chartTest.current = chart

        return () => {
            chart.dispose();
        };
    }, [formattedDates]);

    return (
        <div>
            {loading ? <CircularProgress style={{padding: 20}} /> : <div id={"linechart"} style={{width: "100%", height: "500px"}}/>}
        </div>
    )
}

export default LineOverTime