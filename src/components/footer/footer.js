import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => (
  <footer>
    <div className="footer__social">
      <Link to="/">Twitter</Link>
      <Link to="/">Facebook</Link>
      <Link to="/">Instagram</Link>
    </div>
    <div className="footer__menu">
      <Link to="/faq">FAQ</Link>
      <Link to="/tos">Terms</Link>
      <Link to="/privacy">Privacy</Link>
    </div>
    <div className="footer__copyright">Copyright &copy; 2020 Buzzplay Inc. All Rights Reserved.</div>
  </footer>
);

export default Footer;
