import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} CarMakes. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
