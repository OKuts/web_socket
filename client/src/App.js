import './styles/index.scss'
import ToolBar from "./components/ToolBar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route path='/:id'>
                        <>
                            <ToolBar/>
                            <SettingBar/>
                            <Canvas/>
                        </>
                    </Route>
                    <Redirect to={`f${(+new Date).toString(16)}`}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
