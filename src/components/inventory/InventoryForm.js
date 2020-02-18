import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import { useFormik } from "formik";

import { create, update } from "./InventoryService";

function validate(values) {
  const errors = {};

  ["year", "make", "model"].forEach(i => {
    if (!values[i]) {
      errors[i] = "Required";
    }
  });

  ["inventoryid", "year", "make", "vin", "color", "mileage", "price"].forEach(
    i => {
      if (values[i].length > 30) {
        errors[i] = "max 30";
      }
    }
  );

  if (values.model.length > 150) {
    errors.model = "max 150";
  }

  if (["available", "sold", "delete"].indexOf(values.status)) {
    errors.status = "'available', 'sold', 'delete'";
  }

  return errors;
}

export default function InventoryForm(props) {
  const [done, setDone] = useState(!props.auth);
  const item = props.item;
  const formik = useFormik({
    initialValues: {
      id: item.id,
      status: item.status,
      inventoryid: item.inventoryid,
      year: item.year,
      make: item.make,
      model: item.model,
      vin: item.vin,
      color: item.color,
      mileage: item.mileage,
      price: item.price,
      description: item.description
    },
    validate,
    onSubmit: values => {
      if (item.id) {
        update(values, props.auth);
      } else {
        create(values, props.auth);
      }
      setDone(true);
    }
  });

  return done ? (
    <Redirect to="/" />
  ) : (
    <form className="inventory" onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="row">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            onChange={formik.handleChange}
            value={formik.values.status}
          >
            <option value="available">Available</option>
            <option value="sold">Sold</option>
            <option value="delete">Remove!</option>
          </select>
          {formik.errors.status ? <div>{formik.errors.status}</div> : null}
        </div>
        <div className="row">
          <label htmlFor="inventoryid">Inventory ID</label>
          <input
            id="inventoryid"
            name="inventoryid"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.inventoryid}
          />
          {formik.errors.inventory ? (
            <div>{formik.errors.inventory}</div>
          ) : null}
        </div>
        <div className="row">
          <label htmlFor="year">Year</label>
          <input
            id="year"
            name="year"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.year}
          />
          {formik.errors.year ? <div>{formik.errors.year}</div> : null}
        </div>
        <div className="row">
          <label htmlFor="make">Make</label>
          <input
            id="make"
            name="make"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.make}
          />
          {formik.errors.make ? <div>{formik.errors.make}</div> : null}
        </div>
        <div className="row">
          <label htmlFor="model">Model</label>
          <input
            id="model"
            name="model"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.model}
          />
          {formik.errors.model ? <div>{formik.errors.model}</div> : null}
        </div>
        <div className="row">
          <label htmlFor="vin">VIN</label>
          <input
            id="vin"
            name="vin"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.vin}
          />
          {formik.errors.vin ? <div>{formik.errors.vin}</div> : null}
        </div>
        <div className="row">
          <label htmlFor="color">Color</label>
          <input
            id="color"
            name="color"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.color}
          />
        </div>
        {formik.errors.color ? <div>{formik.errors.color}</div> : null}
        <div className="row">
          <label htmlFor="milage">Milage</label>
          <input
            id="milage"
            name="milage"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.milage}
          />
          {formik.errors.milage ? <div>{formik.errors.milage}</div> : null}
        </div>
        <div className="row">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price ? <div>{formik.errors.price}</div> : null}
        </div>
        <div className="row">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
            className="form-control"
            rows="5"
          />
          {formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        <button type="submit" className="m-3">
          Save
        </button>
      </div>
    </form>
  );
}
