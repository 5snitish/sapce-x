import React, { useEffect, useState } from "react";
import FiltersContainer from "./FiltersContainer";

const Sidebar = ({ years, submit }) => {
  const [url, setUrl] = useState("");


  useEffect(() => {
     submit (url)
    
  }, [url])

  console.log(url);
  const getUrl = async (value, status, type) => {
    const querys = new URLSearchParams(url);

    if (type == "Launch Year") {
      if (querys.has("launch_year")) {
        querys.set("launch_year", value);
        setUrl(querys.toString());
      } else {
        querys.append("launch_year", `${value}`);
        setUrl(querys.toString());
      }
    } else if (type == "Successfull Launch") {
      if (querys.has("launch_success")) {
        querys.set("launch_success", value);
        setUrl(querys.toString());
      } else {
        querys.append("launch_success", `${value}`);
        setUrl(querys.toString());
      }
    } else if (type == "Successfull Landing") {
      if (querys.has("land_success")) {
        querys.set("land_success", value);
        setUrl(querys.toString());
      } else {
        querys.append("land_success", `${value}`);
        setUrl(querys.toString());
      }
    }
  };
  return (
    <div className="side_bar_div">
      <div className="main_heading">Filter</div>
      <div className="full_width">
        <FiltersContainer type={"Launch Year"} getUrl={getUrl} years={years} />
        <FiltersContainer type={"Successfull Launch"} getUrl={getUrl} />
        <FiltersContainer type={"Successfull Landing"} getUrl={getUrl} />
      </div>
    </div>
  );
};

export default Sidebar;
