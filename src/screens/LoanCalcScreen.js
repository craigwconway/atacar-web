import React from "react";

import Calculator from "../components/calculator/Calculator";

function LoanCalcScreen() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1" />
        <div className="col-10 text-only">
          <Calculator />
          <div className="small pt-5">
            All advertised prices exclude government fees and taxes, any finance
            charges, any dealer document preparation charge, and any emission
            testing charge. Vehicles are subject to prior sale. All advertised
            to be true but not guaranteed. We assume no liability for errors or
            omissions.
          </div>
        </div>
        <div className="col-1" />
      </div>
    </div>
  );
}

export default LoanCalcScreen;
