import React from "react";

function ContactScreen() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1" />
        <div className="col-10 text-only">
          <center>
            <strong>
              Call Tomas at (925) 765-0648 <br />
              Vehicles Shown BY APPOINTMENT ONLY.
              <br />
              Please Call Us First!
            </strong>
          </center>
          <iframe
            title="map"
            width="425"
            height="350"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="http://maps.google.com/maps?q=1446+Mazda+Drive,+Walnut+Creek,+CA+94597&amp;ie=UTF8&amp;oe=utf-8&amp;client=firefox-a&amp;ll=37.929237,-122.059221&amp;spn=0.009073,0.023968&amp;z=14&amp;g=1446+Mazda+Drive,+Walnut+Creek,+CA+94597&amp;iwloc=addr&amp;output=embed&amp;s=AARTsJrJnPk_nUiCcEVN707bpDOJnZ-nEg"
          ></iframe>
        </div>
        <div className="col-1" />
      </div>
    </div>
  );
}

export default ContactScreen;
