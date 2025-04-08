import React from "react"
import ReactDOM from "react-dom/client"

const Title = ()=>{
    return React.createElement(
        "h1",
        {id:"heading"}, 
        "Hello World from React"
    )
}


const HeadingComponent = () => (
    <div className="container">
        <Title></Title>
        <h1 id="heading">Component composition</h1>
    </div>
)
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);