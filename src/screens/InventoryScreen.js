import React from "react";

import InventoryList from "../components/inventory/InventoryList";

export default function InventoryScreen(props) {
  return (
    <div className="container">
      <div className="row">
        <ByAppointment status={props.status} />
      </div>
      <div className="row">
        <InventoryList {...props} />
      </div>
    </div>
  );
}

function ByAppointment(props) {
  if (props.status === "available") {
    return (
      <div className="col-12 text-center h4">
        Vehicles Shown BY APPOINTMENT ONLY. <br />
        Please Call Us First!
      </div>
    );
  }
  return null;
}
