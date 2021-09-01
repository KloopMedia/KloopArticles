import {format, parseISO} from "date-fns";
import NamesToExclude from "./NamesToExclude";
import NamesToReplace from "./NamesToReplace";


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

    const formatted = formatNames(unique_per)
    const excluded = excludeNames(formatted)
    const replaced = replaceNames(excluded)
    const merged = mergeNames(replaced)
    const final = formatDates(merged).sort((a: any, b: any) => b.count - a.count);

    console.log("uniquePerFormatter", final)

    // const formatted = merged.map((per: any) => {
    //     const date_counts = countDates(per.ner)
    //
    //     return {
    //         name: per.nom_name,
    //         count: per.ner_aggregate.aggregate.count,
    //         dates: date_counts
    //     }
    // }).sort((a: any, b: any) => b.count - a.count);

    return final
}

const formatNames = (arr: any) => {
    return arr.map((per: any) => ({
            name: per.nom_name,
            count: per.ner_aggregate.aggregate.count,
            dates: [...per.ner]
        })
    )
}

const excludeNames = (arr: any) => {
    const excludeArr = NamesToExclude.map(name => name.Exclude)

    return arr.filter((el: any) => !excludeArr.includes(el.name));
}

const replaceNames = (arr: any) => {
    return arr.map((el: any) => {
        const replacement = NamesToReplace.find((t: any) => el.name === t.OLD)
        if (replacement) {
            return {...el, name: replacement.NEW}
        } else {
            return el
        }
    })
}

const mergeNames = (arr: any) => {
    const replaced = NamesToReplace.map((el: any) => el.NEW)
    const uniqueNames: any = {}
    const nonunique: any = {}

    arr.forEach((el: any) => {
        if (replaced.includes(el.name)) {
            if (uniqueNames[el.name]) {
                uniqueNames[el.name] = {
                    name: el.name,
                    count: uniqueNames[el.name].count + el.count,
                    dates: [...uniqueNames[el.name].dates, ...el.dates]
                }
            } else {
                uniqueNames[el.name] = {
                    name: el.name,
                    count: el.count,
                    dates: [...el.dates]
                }
            }
        } else {
            nonunique[el.name] = {name: el.name, count: el.count, dates: [...el.dates]}
        }
    })

    const uniqueArr = Object.values(uniqueNames)
    const nonuniqueArr = Object.values(nonunique)

    return [...uniqueArr, ...nonuniqueArr]
}

const formatDates = (arr: any) => {
    return arr.map((el: any) => ({...el, dates: countDates(el.dates)}))
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