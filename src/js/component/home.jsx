import React from "react";
import ReactDom from "react-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props)
	return (
		<div className="text-center">
			<h1 className="text-center mt-5"></h1>
			<p>{props.digito1}</p>
			<p>{props.digito2}</p>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div> 
	); 
}; 

export default Home;
     