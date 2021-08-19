import React, {useLayoutEffect, useRef} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {WordCloud, WordCloudSeries} from "@amcharts/amcharts4/plugins/wordCloud";


const NamesCloud = (props: {data: any[]}) => {
    const {data} = props
    const chartTest = useRef<any>(null);


    useLayoutEffect(() => {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create("chartdiv", WordCloud);
        chart.fontFamily = "Courier New";
        let series = chart.series.push(new WordCloudSeries());
        series.randomness = 0.1;
        series.rotationThreshold = 0.5;

        series.data = data;

        series.dataFields.word = "name";
        series.dataFields.value = "count";

        series.heatRules.push({
            "target": series.labels.template,
            "property": "fill",
            "min": am4core.color("#0000CC"),
            "max": am4core.color("#CC00CC"),
            "dataField": "value"
        });

        // series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
        // series.labels.template.urlTarget = "_blank";
        series.labels.template.tooltipText = "{word}: {value}";

        let hoverState = series.labels.template.states.create("hover");
        hoverState.properties.fill = am4core.color("#FF0000");

        // let subtitle = chart.titles.create();
        // subtitle.text = "(click to open)";

        let title = chart.titles.create();
        title.text = "Популярные имена";
        title.fontSize = 20;
        title.fontWeight = "800";

        chartTest.current = chart

        return () => {
            chart.dispose();
        };
    }, [data]);

    return (
        <div id="chartdiv" style={{width: "100%", height: "500px"}}></div>
    )
}

export default NamesCloud