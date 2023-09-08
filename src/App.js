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
// import Users from "./componant/PropTypes/Users";
import LifeCycle from "./componant/LifeCycle/LifeCycle";
// import UserForm from "./componant/RefExample/UserForm";
import UserForm from "./componant/HOOKS/UseRefExample/UserForm";
import UseReducer from "./componant/HOOKS/UseReducer";
import Component1 from "./componant/PROP_DRILLING/Component1";
import Users from "./componant/user_management/Users";
import NewUser from "./componant/user_management/NewUser";
import { UsersContext } from "./componant/context/UsersContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Navbar from "./Pages/Navbar";



function App() {

  return (
    // <div className="App">
    //   <h1>Welcome</h1>
    // </div>
    <BrowserRouter> 
     <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/blogs" element={ <Blogs/> } />
        <Route path="/contract" element={ <Contact/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
