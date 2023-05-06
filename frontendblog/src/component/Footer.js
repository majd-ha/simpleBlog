import React from "react";

export default function Footer() {
  const date = new Date();
  return (
    <div className="footer">
      All rights reserved &copy; {date.getFullYear()}
    </div>
  );
}
