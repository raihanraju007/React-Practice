import React from "react";
import Card from "./componant/Card";
import Data from "./data.json"
import Card2 from "./componant/Card2";
import ReactBootstrap from "./React_Bootstrap/ReactBootstrap";
import STATE from "./STATE";
import ConditionalRendering from "./CONDITIONAL_RENDERING/ConditionalRendering";
import EventHandlerClass from "./event_handler_class/index";
import EvenBinding from "./even_binding/EvenBinding";
import ClassCompIndex from "./Hooks_UseState/ClassCompIndex";
import FuncCompIndex from "./Hooks_UseState/FuncCompIndex";


function App(){
    return <div>
          {/* <ClassCompIndex /> */}
          <FuncCompIndex />
        </div>
}
export default App;
