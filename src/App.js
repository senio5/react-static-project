import React from "react";
import Info from "./components/Info";
import Main from "./components/Main";
import Footer from "./components/Footer";

//import Footer from "./components/Footer";

export default function(){
    return(
        <div className="grid-box">
            <Info />
            <Main />
            <Footer />
        </div>
    )
}

