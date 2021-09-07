import {ForceGraph3D} from "react-force-graph";
import {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {SimilarArticlesQuery} from "../../util/Queries";

const queryString = require('query-string');

interface LabeledValue {
    nodes: Array<any>;
    links: Array<any>;
}

function Graph3dSentences() {
    const {start, end} = queryString.parse(window.location.search);
    const [graphs, setGraphs] = useState<any>(undefined)
    const [myData, setMyData] = useState<LabeledValue>();

    console.log(start, end)

    const {
        loading,
        error,
        data: incomingData,
        refetch
    } = useQuery(SimilarArticlesQuery, {
        variables: {
            startDate: start + " 00:00:00",
            endDate: end + " 24:00:00"
        },
        notifyOnNetworkStatusChange: true,
    });

    useEffect(() => {
        console.log(incomingData)
        if (incomingData && incomingData.similar_articles_view) {
            setGraphs(incomingData.similar_articles_view)
        }
    }, [incomingData])

    useEffect(() => {
        if (graphs) {
            let all_nodes: Array<any> = [];
            let linked_nodes: Array<any> = [];
            let unique: Array<string> = [];
            graphs.forEach((item: any, idx: number) => {
                // console.log(item)
                let source_title: string = item.original_article_title;
                let source_url: string = item.original_article_url;
                let target_title: string = item.similar_article_title;
                let target_url: string = item.similar_article_url;

                let node1 = {
                    "id": source_url,
                    "name": source_title,
                    "val": 1,
                    "source_url": source_url
                };
                const node2 = {
                    "id": target_url,
                    "name": target_title,
                    "val": 1,
                    "source_url": source_url

                }
                const link = {
                    "source": source_url,
                    "target": target_url,
                    "weight": item.weight
                }
                if (!unique.includes(node1.id)) {
                    all_nodes.push(node1);
                    unique.push(node1.id);
                }
                if (!unique.includes(node2.id)) {
                    all_nodes.push(node2);
                    unique.push(node2.id);
                }
                linked_nodes.push(link);
            })
            setMyData({"nodes": all_nodes, "links": linked_nodes})
        }


    }, [graphs])

    return (
        <div style={{overflow: "hidden"}}>
            {loading
                ? "loading"
                : <ForceGraph3D
                    nodeAutoColorBy="source_url"
                    graphData={myData}
                    // linkWidth={(item: any) => item.weight / 50 + 2}
                />}
        </div>
    );
}

export default Graph3dSentences;