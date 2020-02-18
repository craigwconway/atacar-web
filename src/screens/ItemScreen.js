import React from "react";

import { useParams } from "react-router-dom";
import InventoryDetail from "../components/inventory/InventoryDetail";

export default function ItemScreen(props) {
  const { itemId } = useParams(false);
  return <InventoryDetail itemId={itemId} auth={props.auth} />;
}
