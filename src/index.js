// 1- import the library we use 
import React from 'react' 
// to import reat for the react library 
import ReactDom from 'react-dom' 
// import reactdom to see from the screen 

//2- create a component " there is two way to create a companat Class or Function "
const App = () =>{
    return (
        <div>
            <h1> Hi React!</h1>
        </div>
    )
}
//3- to see as a web page you need to export it 

// reactDom.render(<element/>, Dommanipulation)
ReactDom.render (<App/>, document.querySelector("#root"))