import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import {appRoutes} from "./routes/routes"
import FallingLeaves from "./components/FallingLeaves/FallingLeaves";

function App() {
    return (
        <FallingLeaves>
            <Navbar/>

            <div className="container py-5">
            <Routes>
                {appRoutes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element}/>
                ))}
            </Routes>
            </div>
        </FallingLeaves>
    );
}

export default App;
