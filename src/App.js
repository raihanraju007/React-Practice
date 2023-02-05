import React from "react";
import Card from "./componant/Card";

function App(){
    return <div>
               <h1 className="headingStyle">Todo App</h1>
               <Card todoTitle = "Call Mother" description = "1 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. " />
               
                <Card todoTitle = "Call Father" description = "2 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. " /> 

                <Card todoTitle = "Call Brother" description = "3 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. " />
               
        </div>
}

export default App;