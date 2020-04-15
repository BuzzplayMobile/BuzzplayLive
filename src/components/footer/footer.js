import React from "react";

const Footer = (props) => (
  <footer>
    <div className="footer__social">
      <a href="/">Twitter</a>
      <a href="/">Facebook</a>
      <a href="/">Instagram</a>
    </div>
    <div className="footer__menu">
      <a href="/faq">FAQ</a>
      <a href="/tos">Terms</a>
      <a href="/privacy">Privacy</a>
    </div>
    <div className="footer__copyright">Copyright &copy; 2020 Buzzplay Inc. All Rights Reserved.</div>
  </footer>
);

export default Footer;
