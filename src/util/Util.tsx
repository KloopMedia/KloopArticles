import {format, parseISO} from "date-fns";

const countDates = (ner: any) => {
    let date_counts: any = {}
    ner.forEach((ner: any) => ner.texts.forEach((text: any) => {
            let date = format(parseISO(text.date_publish), 'yyyy-MM-dd')
            date_counts[date] = (date_counts[date] || 0) + 1;
        }
    ))
    return date_counts
}

const uniquePerFormatter = (unique_per: any) => {
    return unique_per.map((per: any) => {
        const date_counts = countDates(per.ner)

        return {
            name: per.nom_name,
            count: per.ner_aggregate.aggregate.count,
            dates: date_counts
        }
    }).sort((a: any, b: any) => b.count - a.count);
}

// const getTop100 = () => {
//     console.log("DATA", nameData)
//
//     const formatted = uniquePerFormatter(nameData.unique_per)
//
//     const top100 = formatted.slice(0, 100)
//     setNERData(top100)
//
//     const top5 = formatted.slice(0, 5)
//     setLineData(top5)
//
//     console.log("formatted", formatted)
//     console.log("top5", top5)
// }


export {countDates, uniquePerFormatter}