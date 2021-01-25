import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import Topbar from "./Topbar";
import OrderList from "./OrderList"
import CreateOrder from "./CreateOrder";
import ViewOrder from "./ViewOrder"

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
    <Route exact path='/OrderList' component={OrderList}></Route> 
    <Route exact path='/CreateOrder' component={CreateOrder}></Route> 
    <Route exact path='/ViewOrder/:id' component={ViewOrder}></Route> 
 
    </Switch>
  </Container>
);

export default Content;
