import React from "react";
import FiltersContainer from "./FiltersContainer";

const Sidebar = ({years,submit}) => {
  let url = process.env.NEXT_PUBLIC_SPACE_X_URL 
  const getUrl =  async ()=>{

  }
  return (
    <div className="side_bar_div">
      <div className="main_heading">Filter</div>
      <div className="full_width">
<FiltersContainer type= {"Launch Year"} getUrl = {getUrl}   years={years}/>
<FiltersContainer type= {"Successfull Launch"}   getUrl = {getUrl} />
<FiltersContainer type= {"Successfull Landing"}  getUrl = {getUrl} />
      </div>
    </div>
  );
};

export default Sidebar;
