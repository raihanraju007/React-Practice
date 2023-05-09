import React from "react";
import Card from "./componant/Card";
import Data from "./data.json"

function App(){

        // let items = [];
        // for(let x = 0; x < Data.length; x++){
        //         items.push(<Card todoTitle = {Data[x].title} description = {Data[x].desc} />)
        // }
        const users = [
                {
                     fullName: "Md. Raihan Hossin",   
                     age: 27,
                     phones : [
                        {home: "01740387029"},
                        {office: "0191111143"}
                     ]
                },
                {
                        fullName: "Raju",   
                        age: 28,
                        phones : [
                           {home: "017401719534042"},
                           {office: "09999999999"}
                        ]
                   },
                
        ]


    return <div>
               {/* <h1 className="headingStyle">Todo App</h1>
               {Data.map((item, index)=> <Card key={index} todoTitle = {item.title} description = {item.desc} />)} */}
               <h1>Nested Lists</h1>
               {
                users.map((user, index)=> <article key={index}>
                        <h3>Full Name : {user.fullName}</h3>
                        <p>Age :  {user.age}</p>
                        {
                                user.phones.map((phone, index) => <div key = {index}>
                                        <p>Home : {phone.home}</p>
                                        <p>Office :  {phone.office}</p>
                                </div>)
                        }
                </article>)
               }
        </div>
}

export default App;
