import React, { useState } from "react";

const YearContainer = ({name,selected}) => {

  const [value,setValue] = useState(false)
  return (
    <div className={selected ? "background-active" : "background-inactive "}>
      <span>{name} </span>
    </div>
  );
};

export default YearContainer;
