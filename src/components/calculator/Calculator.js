import React, { useState } from "react";
import { useFormik } from "formik";

export default function Calculator() {
  const [payment, setPayment] = useState("77.09");
  const formik = useFormik({
    initialValues: {
      amount: "$5,000",
      rate: "3.5%",
      term: "6"
    },
    onSubmit: values => {
      setPayment(calc(values.amount, values.rate, values.term));
    }
  });
  return (
    <form className="calc" onSubmit={formik.handleSubmit}>
      <div className="calcRow">
        <label htmlFor="amount">Loan Amount</label>
        <input
          id="amount"
          name="amount"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.amount}
        />
      </div>
      <div className="calcRow">
        <label htmlFor="rate">Interest Rate</label>
        <input
          id="rate"
          name="rate"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.rate}
        />
        <div className="calcRow">
          <label htmlFor="term">Term (Years)</label>
          <input
            id="term"
            name="term"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.term}
          />
        </div>
      </div>
      <div className="calcSubmit">
        <button type="submit">Calculate</button>
      </div>
      <span className="calcResult">Est. Monthly Payment: ${payment}</span>
    </form>
  );
}

function clean(str) {
  return str.replace(/,|%|\$/g, "");
}

function calc(amt, interest, term) {
  amt = clean(amt);
  interest = clean(interest);
  term = clean(term);
  let monthly = interest / 100 / 12;
  let monthly_pay =
    Math.floor(
      ((amt * monthly) / (1 - Math.pow(1 + monthly, -1 * term * 12))) * 100
    ) / 100;
  return monthly_pay.toFixed(2);
}
