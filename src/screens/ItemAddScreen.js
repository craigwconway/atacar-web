import React from "react";

import InventoryForm from "../components/inventory/InventoryForm";

export default function ItemAddScreen(props) {
  const item = {
    status: "available",
    inventoryid: "",
    year: "",
    make: "",
    model: "",
    vin: "",
    color: "",
    mileage: "",
    price: "",
    description: ""
  };
  return <InventoryForm item={item} auth={props.auth} />;
}
