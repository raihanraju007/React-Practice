import React from "react";
import Card from "./componant/Card";
import Data from "./data.json"
import Card2 from "./componant/Card2";
import ReactBootstrap from "./React_Bootstrap/ReactBootstrap";
import STATE from "./STATE";
import ConditionalRendering from "./CONDITIONAL_RENDERING/ConditionalRendering";

function App(){
    return <div>
              {/* <STATE /> */}
              <ConditionalRendering />
        </div>
}
export default App;
