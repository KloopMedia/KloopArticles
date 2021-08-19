import {gql} from "@apollo/client";

const NameAndCountQuery = gql(`
        query MyQuery($startDate: String = "", $endDate: String = "") {
            unique_per(where: {ner: {texts: {date_publish: {_gte: $startDate, _lte: $endDate}}}}, order_by: {ner_aggregate: {count: desc}}) {
                nom_name
                ner_aggregate(where: {texts: {date_publish: {_gte: $startDate, _lte: $endDate}}}) {
                    aggregate {
                        count
                    }
                }
                ner(where: {texts: {date_publish: {_gte: $startDate, _lte: $endDate}}}) {
                    texts(where: {date_publish: {_gte: $startDate, _lte: $endDate}}, distinct_on: url) {
                        date_publish
                    }
                }
            }
        }
    `);

const MediaAndCountQuery = gql(`
        query MyQuery($startDate: String = "", $endDate: String = "", $media: String = "") {
            unique_per(where: {ner: {texts: {date_publish: {_gte: $startDate, _lte: $endDate}, mass_media_name: {_eq: $media}}}}, order_by: {ner_aggregate: {count: desc}}) {
                nom_name
                ner_aggregate(where: {_and: {texts: {date_publish: {_gte: $startDate, _lte: $endDate}, mass_media_name: {_eq: $media}}}}) {
                    aggregate {
                        count
                    }
                }
                ner(where: {texts: {date_publish: {_gte: $startDate, _lte: $endDate}, mass_media_name: {_eq: $media}}}) {
                    texts(where: {date_publish: {_gte: $startDate, _lte: $endDate}, mass_media_name: {_eq: $media}}, distinct_on: url) {
                        date_publish
                        url
                    }
                }
            }
        }
    `)

const MassMediaNamesQuery = gql(`
        query MyQuery($startDate: String, $endDate: String) {
            mass_media(distinct_on: mass_media_name, where: {date_publish: {_gte: $startDate, _lte: $endDate}}) {
                mass_media_name
            }
        }
    `)


export {MassMediaNamesQuery, MediaAndCountQuery, NameAndCountQuery}