import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";

// import components
import NamesCloud from "./components/charts/NamesCloud";
import LineOverTime from "./components/charts/LineOverTime";
import SimilarArticlesGraph from "./components/charts/SimilarArticlesGraph"

// import styles
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import './App.css'


const App = () => {

    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route path="/cloud">
                            <NamesCloud/>
                        </Route>
                        <Route path="/line">
                            <LineOverTime/>
                        </Route>
                        <Route path="/graph">
                            <SimilarArticlesGraph/>
                        </Route>
                        <Route path="/">
                            {/*<Home/>*/}
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
