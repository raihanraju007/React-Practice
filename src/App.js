import React from "react";
import Card from "./componant/Card";
import Data from "./data.json"

function App(){

        let items = [];
        // for(let x = 0; x < Data.length; x++){
        //         items.push(<Card todoTitle = {Data[x].title} description = {Data[x].desc} />)
        // }

    return <div>
               <h1 className="headingStyle">Todo App</h1>
               {Data.map((item, index)=> <Card key={index} todoTitle = {item.title} description = {item.desc} />)}
        </div>
}

export default App;
