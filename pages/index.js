import axios from "axios";
import { useState } from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
export default function Home({ data, array }) {
  const [spaceXdata, setSpaceXdata] = useState([...data]);
  console.log(array);

  const submit = async (url) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SPACE_X_URL}${url}`
      );
      setSpaceXdata(res.data);
    } catch (error) {}
  };
  return (
    <div className="screen_container  max-height hidden">
      <span className="heading_text">SpaceX Launch Programs</span>
      <div className="main_container      ">
        {/* sidebar */}
        <Sidebar years={array} submit={submit} />
        <div className="flex-col">
          <div className=" scroll   card_grid">
            {spaceXdata.map((item) => (
              <Card item={item} />
            ))}
          </div>
          <div className="full_width  padding">
            <span className="text-big text-black flex-row">Developed By:</span>
            <span className="text-big  blue-text">Nitish Sharma</span>
          </div>
        </div>
      </div>

      {/* spaexData */}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches?limit=100");
  const data = await res.json();
  let array = [];
  for (let i = 2006; i <= 2020; i++) {
    array.push(i);
  }
  return {
    props: {
      data,
      array,
    },
  };
};
