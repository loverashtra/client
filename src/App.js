import "./App.scss";

import Header from "./components/header/Header"; 
import Home from "./pages/Home";
// import Navbar from "./components/navbar/Navbar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="love-app">
      <div>
        <Header />
        <Home />
      </div>
    </div>
    // <>
    //   <Router>
    //     <Navbar />
    //     <Switch>
    //       <Route path="/" />
    //     </Switch>
    //   </Router>
    // </>
  );
}

export default App;
