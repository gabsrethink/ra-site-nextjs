import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="nav">
      <p className="logo">
        <strong>Rethink Academy</strong>
      </p>
      <div>
        <a href="/"> Home </a>
      </div>
    </div>
  );
}
