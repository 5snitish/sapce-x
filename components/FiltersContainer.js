import React from "react";
import YearContainer from "./YearContainer";

const FiltersContainer = ({years,type}) => {
  console.log(years)
  return (
    <div className="full_width">
      <div className="  border   padding-10 ">
        <span className="     text-center ">{type}</span>
       
      </div>
    { years!==undefined ? <div className=" full_width  filter_container_grid ">
        {years.map((item)=>{
          return         (<YearContainer name={item} />)
        })} 
         
        
     
        </div>:(
           <div className=" full_width  filter_container_grid ">
           
                     <YearContainer selected={true} name={"true"}   /> 
                     <YearContainer name={"false"}   /> 
         
            
           
        
           </div>
        )}
        
    </div>
  );
};

export default FiltersContainer;
