//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";



// a partir de aqui hago el codigo ¡
let num1 = 0;
let num2 = 0;

setInterval(function () {
    console.log(num1++)
    console.log(num2++)

    //console.log(num1=0, num1<=9, num1++  )






//render your react application
ReactDOM.render(<Home digito1={num1 } digito2={num2}/>, document.querySelector("#app"));
}, 1000);









