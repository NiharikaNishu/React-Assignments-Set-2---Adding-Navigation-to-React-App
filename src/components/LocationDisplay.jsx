import React from "react";
import { useLocation } from "react-router-dom";

export default function LocationDisplay() {
  let location = useLocation();
  return <div data-test-id="location-display">{location.pathname}</div>;
}
