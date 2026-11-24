import "bootstrap/dist/css/bootstrap.min.css";
import type { Alkatresz_interface } from "./Models/Interfaces/Alkatresz.interface";
import { useState } from "react";
export const App = function () {
  const [electronicParts, setElectronicParts] = useState<Alkatresz_interface[]>([]);

  useState(() => {
    const ReadData = async () => {
      const response = await fetch("http://127.0.0.1:3000/alkatreszek");
      const data = await response.json();
      setElectronicParts(data);
    };
    ReadData();
  }), [];
  return (
    <div className="container">

    </div>
  )
};