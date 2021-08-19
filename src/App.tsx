import React, {useEffect, useState} from 'react';
import {gql, useQuery} from '@apollo/client';
import {DateRange} from 'react-date-range';
import {format, parseISO} from "date-fns"; // theme css file
import {
    Button,
    createStyles,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    Theme
} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// import components
import NamesCloud from './components/charts/NamesCloud';
import LineOverTime from "./components/charts/LineOverTime";
import MediaChart from "./components/charts/MediaChart";

// import styles
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import './App.css'
import {MassMediaNamesQuery, MediaAndCountQuery, NameAndCountQuery} from "./util/Queries";
import {uniquePerFormatter} from "./util/Util";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const App = () => {
    // const TODAY = format(new Date(), 'yyyy-MM-dd')
    // const classes = useStyles();
    //
    // const [NERData, setNERData] = useState<any>([])
    // const [lineData, setLineData] = useState<any>([])
    // const [mediaChartData, setMediaChartData] = useState<any>([])
    // const [allMediaNames, setMediaNames] = useState<any>([])
    // const [selectedMedia, setSelectedMedia] = useState('')
    //
    // const [selectedDateRange, setDateRange] = useState({
    //     startDate: new Date(),
    //     endDate: new Date(),
    //     key: 'selection',
    // })
    //
    // const {
    //     loading: mediaNameLoading,
    //     error: mediaNameError,
    //     data: mediaNameData,
    //     refetch: mediaNameRefetch
    // } = useQuery(MassMediaNamesQuery, {
    //     variables: {
    //         startDate: "2021-08-01" + " 00:00:00",
    //         endDate: "2021-08-03" + " 24:00:00"
    //     },
    //     notifyOnNetworkStatusChange: true,
    // });
    // console.log(mediaNameData)
    //
    // const {
    //     loading: nameLoading,
    //     error: nameError,
    //     data: nameData,
    //     refetch: nameRefetch
    // } = useQuery(NameAndCountQuery, {
    //     variables: {
    //         startDate: TODAY + " 00:00:00",
    //         endDate: TODAY + " 24:00:00"
    //     },
    //     notifyOnNetworkStatusChange: true,
    // });
    //
    // const {
    //     loading: mediaLoading,
    //     error: mediaError,
    //     data: mediaData,
    //     refetch: mediaRefetch
    // } = useQuery(MediaAndCountQuery, {
    //     variables: {
    //         startDate: TODAY + " 00:00:00",
    //         endDate: TODAY + " 24:00:00",
    //         media: ""
    //     },
    //     notifyOnNetworkStatusChange: true,
    // });
    //
    // useEffect(() => {
    //     if (mediaNameData) {
    //         let names = mediaNameData.mass_media.map((media: any) => media.mass_media_name)
    //         console.log(mediaNameData)
    //         console.log(names)
    //         setMediaNames(names)
    //     }
    // }, [mediaNameData])
    //
    // useEffect(() => {
    //     if (nameData) {
    //         console.log("DATA", nameData)
    //
    //         const formatted = uniquePerFormatter(nameData.unique_per)
    //
    //         const top100 = formatted.slice(0, 100)
    //         setNERData(top100)
    //
    //         const top5 = formatted.slice(0, 5)
    //         setLineData(top5)
    //
    //         console.log("formatted", formatted)
    //         console.log("top5", top5)
    //
    //     }
    // }, [nameData])
    //
    // useEffect(() => {
    //     if (mediaData) {
    //         console.log("mediaData", mediaData)
    //
    //         const formatted = uniquePerFormatter(mediaData.unique_per)
    //
    //         const top5 = formatted.slice(0, 5)
    //
    //         setMediaChartData(top5)
    //
    //         console.log("media formatted", formatted)
    //         console.log("top5", top5)
    //
    //     }
    // }, [mediaData])
    //
    // const handleDateSelect = (ranges: any) => {
    //     console.log(ranges);
    //     setDateRange(ranges.selection)
    // }
    //
    // const fetchData = () => {
    //     let start = selectedDateRange.startDate
    //     let end = selectedDateRange.endDate
    //     let media = selectedMedia
    //     console.log(start, end)
    //     console.log('refetched')
    //
    //     mediaNameRefetch({
    //         startDate: format(start, 'yyyy-MM-dd') + "00:00:00",
    //         endDate: format(end, 'yyyy-MM-dd') + "23:59:59"
    //     })
    //
    //     nameRefetch({
    //         startDate: format(start, 'yyyy-MM-dd') + "00:00:00",
    //         endDate: format(end, 'yyyy-MM-dd') + "23:59:59"
    //     })
    //
    //     if (selectedMedia) {
    //         mediaRefetch({
    //             startDate: format(start, 'yyyy-MM-dd') + "00:00:00",
    //             endDate: format(end, 'yyyy-MM-dd') + "23:59:59",
    //             media: media
    //         })
    //     }
    // }
    //
    // const handleSelectedMediaChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     setSelectedMedia(event.target.value as string);
    // }

    return (
        <div className="App">
            <Router>
                <div>
                    {/*<nav>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/">Home</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/cloud">Names Cloud</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/line">Line Over Time</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/cloud">
                            <NamesCloud/>
                        </Route>
                        <Route path="/line">
                            <LineOverTime/>
                        </Route>
                        <Route path="/">
                            {/*<Home/>*/}
                        </Route>
                    </Switch>
                </div>
            </Router>
            {/*<DateRange*/}
            {/*    ranges={[selectedDateRange]}*/}
            {/*    onChange={handleDateSelect}*/}
            {/*/>*/}
            {/*<Grid>*/}
            {/*    <FormControl className={classes.formControl}>*/}
            {/*        <InputLabel id="demo-simple-select-label">Media</InputLabel>*/}
            {/*        <Select*/}
            {/*            labelId="demo-simple-select-label"*/}
            {/*            id="demo-simple-select"*/}
            {/*            value={selectedMedia}*/}
            {/*            onChange={handleSelectedMediaChange}*/}
            {/*        >*/}
            {/*            {allMediaNames.map((media: string) => <MenuItem value={media}>{media}</MenuItem>)}*/}
            {/*        </Select>*/}
            {/*    </FormControl>*/}
            {/*</Grid>*/}
            {/*<Grid>*/}
            {/*    <Button variant={"contained"} color={"primary"} onClick={fetchData}>Fetch data</Button>*/}
            {/*</Grid>*/}
            {/*<br/>*/}
            {/*{nameLoading ?*/}
            {/*    'loading...'*/}
            {/*    :*/}
            {/*    <Grid>*/}
            {/*        <NamesCloud data={NERData}/>*/}
            {/*        <LineOverTime chartId={"top5"} data={lineData}/>*/}
            {/*        <LineOverTime chartId={"mediaChart"} data={mediaChartData} media={selectedMedia}/>*/}
            {/*    </Grid>*/}
            {/*}*/}
        </div>
    );
};

export default App;
