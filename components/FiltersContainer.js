import React, { useState } from "react";
import YearContainer from "./YearContainer";

const FiltersContainer = ({ years, type, getUrl }) => {
  const [selected, setSelected] = useState(null)
  const [updatedyears, setYears] = useState(years)
  



  const Values = (value) => {
    if (value == selected){
      setSelected(null)
    } else {
      setSelected(value)
    }

    if (type=="Launch Year"){

       if (value==selected){
         return 
       }

    }
    
    setYears(years)
    console.log(value)
  }

  return (
    <div className="full_width">
      <div className="  border   padding-10 ">
        <span className="     text-center ">{type}</span>

      </div>
      {updatedyears !== undefined ? <div className=" full_width  filter_container_grid ">
        {updatedyears.map((item) => {

          return (<YearContainer Values={Values} selected={selected} name={item} />)
        })}



      </div> : (
        <div className=" full_width  filter_container_grid ">

          <YearContainer Values={Values} selected={selected} name={"true"} />
          <YearContainer Values={Values} selected={selected} name={"false"} />




        </div>
      )}

    </div>
  );
};

export default FiltersContainer;
