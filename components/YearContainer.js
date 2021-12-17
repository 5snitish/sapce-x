import React, { useState } from "react";

const YearContainer = ({name,selected,Values,key}) => {
 
  return (
    <div key={key} onClick={()=>Values(name)} className={selected==name ? "background-active" : "background-inactive "}>
      <span>{name} </span>
    </div>
  );
};

export default YearContainer;
