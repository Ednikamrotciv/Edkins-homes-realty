import React from "react";
import logo from "../assets/logo.png";

export default function Logo({
  size = 92,
  light = true,
}: {
  size?: number;
  light?: boolean;
}) {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="Edkins Homes Realty"
        width={size}
        height={Math.round(size * (288 / 366))}
        className="logo__img"
      />
    </div>
  );
}
