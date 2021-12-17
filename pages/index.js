import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
export default function Home({ data, array }) {
  const [spaceXdata, setSpaceXdata] = useState([...data]);
  

  const submit = async (url) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_SPACE_X_URL}${url}`
      );
      setSpaceXdata(res.data);
    } catch (error) {}
  };
  return (
    <>
    <Head>
    <title>space x</title>
		<meta charset="utf-8"/>
		<meta name="description" content="spacex site data filter "/>
		<meta name="author" content="nitish sharma"/>
		<meta name="keywords" content="space-x"/>
 
		<meta property="og:title" content="" />
		<meta property="og:type" content="" />
		<meta property="og:url" content="" />
		<meta property="og:image" content="" />
 
		<link rel="canonical" href="" />
    </Head>
    <div className="screen_container  max-height hidden">
      <span className="heading_text">SpaceX Launch Programs</span>
      <div className="main_container      ">
           <Sidebar years={array} submit={submit} />
        <div className="flex-col">
          <div className=" scroll   card_grid">
            {spaceXdata.map((item,key) => (
              <Card key={key}  item={item} />
            ))}
          </div>
          <div className="full_width  padding">
            <span className="text-big text-black flex-row">Developed By:</span>
            <span className="text-big  blue-text">Nitish Sharma</span>
          </div>
        </div>
      </div>

 
    </div>
    </>
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
