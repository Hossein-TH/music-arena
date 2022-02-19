import React, {useReducer} from 'react';
import './Assets/Css/App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from "./Routers/Orginals/HomePage";
import Musics from "./Routers/Orginals/Musics";
import Login from "./Routers/Orginals/Login";
import NotFound from "./Routers/Orginals/NotFound";
import About from "./Routers/Orginals/About";
import Register from "./Routers/Orginals/Register";
import Post1 from "./Routers/Post/Post1";
import Post2 from "./Routers/Post/Post2";
import Post3 from "./Routers/Post/Post3";
import Post4 from "./Routers/Post/Post4";
import Post5 from "./Routers/Post/Post5";
import Post6 from "./Routers/Post/Post6";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
import {ThemeProvider} from '@material-ui/core/styles';
import theme from "./Component/Theme/Theme";
import {AppContext, AppContextDefault} from './Context/AppContext'


const appReducer = (state, action) => {
    if (action.type) {
        return {...state, theme: action.theme};
    }
};

function App() {
    const [appState, setAppState] = useReducer(
        appReducer, AppContextDefault
    );
    return (
        <section>
            <Router>
                <AppContext.Provider value={{
                    state: appState,
                    dispatch: setAppState
                }}>
                    <ThemeProvider theme={theme({type: appState.theme})}>
                        <CssBaseline/>
                        <ScrollToTop/>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/Musics" component={Musics}/>
                            <Route exact path="/Login" component={Login}/>
                            <Route exact path="/Register" component={Register}/>
                            <Route exact path="/About" component={About}/>
                            <Route exact path="/Post1" component={Post1}/>
                            <Route exact path="/Post2" component={Post2}/>
                            <Route exact path="/Post3" component={Post3}/>
                            <Route exact path="/Post4" component={Post4}/>
                            <Route exact path="/Post5" component={Post5}/>
                            <Route exact path="/Post6" component={Post6}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </ThemeProvider>
                </AppContext.Provider>
            </Router>
        </section>
    );
}

export default App;
