import React, { useState } from "react";
import Card from "./componant/Card";
import Data from "./data.json";
import Card2 from "./componant/Card2";
import ReactBootstrap from "./React_Bootstrap/ReactBootstrap";
import STATE from "./STATE";
import ConditionalRendering from "./CONDITIONAL_RENDERING/ConditionalRendering";
import EventHandlerClass from "./event_handler_class/index";
import EvenBinding from "./even_binding/EvenBinding";
import ClassCompIndex from "./componant/HOOKS/Hooks_UseState/ClassCompIndex";
import FuncCompIndex from "./componant/HOOKS/Hooks_UseState/FuncCompIndex";
import UpdateFunComponent from "./componant/HOOKS/Hooks_UseState/UpdateFunComponent";
import Form from "./componant/Form/Form";
import Child from "./componant/SATET_LIFTING/Child";
// import Signup from "./componant/Signup";
import Toggle from "./componant/Toggle/Toggle";
import FAQS from "./componant/FAQ/FAQS";
// import UseEffectExample from "./componant/HOOKS/useEffect/UseEffectExample";
import DataFetch from "./componant/HOOKS/CustomHooks/DataFetch";
import { useEffect } from "react";
import { First } from "react-bootstrap/esm/PageItem";
import Table from "./componant/Table/Table";
import Users from "./componant/PropTypes/Users";


function App() {

  return (
    <div>
      <Users />
    </div>
  );
}

export default App;
