import React from "react";

import { Link } from "react-router-dom";

export default function InventoryCard(props) {
  const item = props.item;
  return (
    <div className="card">
      <Link to={`/inventory/${item.id}`}>
        <img
          src={item.path}
          alt={item.year + " " + item.make + " " + item.model}
          // className="img-fluid w-100"
          height="99"
          width="149"
        />
      </Link>
      <Link to={`/inventory/${item.id}`}>
        <div className="card-body">
          <p className="card-text">
            {item.year} {item.make} {item.model}
          </p>
        </div>
      </Link>
    </div>
  );
}
