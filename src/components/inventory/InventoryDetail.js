import React, { useEffect, useState } from "react";

import { get } from "./InventoryService";
import InventoryForm from "./InventoryForm";

export default function InventoryDetail(props) {
  const [item, setItem] = useState({});
  const [form, setForm] = useState(false);

  useEffect(() => {
    get(props.itemId, setItem);
  }, [props]);

  return form ? (
    <InventoryForm item={item} auth={props.auth} />
  ) : (
    <div className="container">
      <h2 className="text-center p-3">
        {item.year} {item.make} {item.model}
        <EditButton auth={props.auth} setForm={setForm} />
      </h2>
      <div className="row">
        <div className="col-2" />
        <div className="col-8 text-center item-summary">
          <b>Price:</b> {item.price}
          &nbsp;|&nbsp;
          <b>Mileage:</b> {item.milage}
          &nbsp;|&nbsp;
          <b>VIN:</b> {item.vin}
        </div>
        <div className="col-2" />

        <div className="row">
          <div className="col-1" />
          <div
            className="col-10"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
          <div className="col-1" />
        </div>
      </div>
    </div>
  );
}

function EditButton(props) {
  return props.auth ? (
    <button onClick={() => props.setForm(true)} className="admin">
      [edit]
    </button>
  ) : null;
}
