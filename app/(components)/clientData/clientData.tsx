"use client";
import React, { useState } from "react";
import Btn from "../btn/btn";

export default function ClientData() {
  const names: string[] = ["Qasim","Ahmed","Fatima","Rabia","Arbab","Aisha","Ayesha","Zaineb",];
  const [nameIndex, setNameIndex] = useState(0);
  const handlePreviousName = () => {
    setNameIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };
  const handleNextName = () => {
    setNameIndex((prevIndex) => prevIndex < names.length - 1 ? prevIndex + 1 : prevIndex);
  };

  return (
    <>
    <div className="ClientData">
    <Btn title="Previous" onClickFn={handlePreviousName} />
      <span>{names[nameIndex]}</span>
      <Btn title="Next" onClickFn={handleNextName} />
    </div>

    </>
  );
}
