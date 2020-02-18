import React, { useEffect, useState } from "react";

import { list } from "./InventoryService";
import InventoryCard from "./InventoryCard";

export default function InventoryList(props) {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    list(setInventory);
  }, [props]);

  return (
    <>
      {inventory
        .filter(item => item.status === props.status)
        .map(item => (
          <InventoryCard key={item.id} item={item} />
        ))}
    </>
  );
}
