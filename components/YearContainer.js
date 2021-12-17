import React, { useState } from "react";

const YearContainer = ({name,selected,Values}) => {
 
  return (
    <div onClick={()=>Values(name)} className={selected==name ? "background-active" : "background-inactive "}>
      <span>{name} </span>
    </div>
  );
};

export default YearContainer;
