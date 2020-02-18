import React from "react";

import { Switch, Route } from "react-router-dom";

import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import LoanCalcScreen from "../screens/LoanCalcScreen";
import LoginScreen from "../screens/LoginScreen";
import RepairScreen from "../screens/RepairScreen";
import ServicesScreen from "../screens/ServicesScreen";
import ItemScreen from "../screens/ItemScreen";
import InventoryScreen from "../screens/InventoryScreen";
import Logout from "../components/auth/Logout";
import ItemAddScreen from "../screens/ItemAddScreen";

export default function Routes(props) {
  const { auth, setAuth } = props;
  const authProps = { auth, setAuth };
  return (
    <Switch>
      <Route path="/login.php">
        <LoginScreen {...authProps} />
      </Route>
      <Route path="/logout">
        <Logout {...authProps} />
      </Route>
      <Route path="/inventory/:itemId">
        <ItemScreen auth={auth} />
      </Route>
      <Route path="/add-inventory/">
        <ItemAddScreen auth={auth} />
      </Route>
      <Route path="/sold">
        <InventoryScreen status={"sold"} />
      </Route>
      <Route path="/">
        <InventoryScreen status={"available"} />
      </Route>
      <Route path="/loan-calculator">
        <LoanCalcScreen />
      </Route>
      <Route path="/about">
        <AboutScreen />
      </Route>
      <Route path="/contact">
        <ContactScreen />
      </Route>
      <Route path="/services">
        <ServicesScreen />
      </Route>
      <Route path="/repair">
        <RepairScreen />
      </Route>
    </Switch>
  );
}
