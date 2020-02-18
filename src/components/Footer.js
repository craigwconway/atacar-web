import React from "react";

function Footer() {
  return (
    <footer className="text-center mt-4">
      Copyright &copy; {new Date().getFullYear()} Ata Car. All rights reserved.
      Licensed Bonded and Insured Auto Brokers.
      <br />
      1446 Mazda Drive, Walnut Creek, CA 94597
      <br />
      <a href="mailto:tomask2@sbcglobal.net">Tomas &nbsp;</a>
      <a href="tel:925-765-0648">(925) 765-0648</a>
    </footer>
  );
}

export default Footer;
