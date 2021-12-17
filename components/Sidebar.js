import React from "react";
import FiltersContainer from "./FiltersContainer";

const Sidebar = ({years}) => {
  return (
    <div className="side_bar_div">
      <div className="main_heading">Filter</div>
      <div className="full_width">
<FiltersContainer type= {"Launch Year"}  years={years}/>
<FiltersContainer type= {"Successfull Launch"}  />
<FiltersContainer type= {"Successfull Landing"} />
      </div>
    </div>
  );
};

export default Sidebar;
