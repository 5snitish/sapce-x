

import { useState } from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
export default function Home({ data,array }) {
  const [spaceXdata, setSpaceXdata] = useState([...data])
console.log(array)

const submit = async ()=>{

}
  return (
    <div className="screen_container max-height hidden">
      <span className="heading_text"  >SpaceX Launch Programs</span>
      <div className="main_container hidden  " >


        {/* sidebar */}
        <Sidebar years =  {array }  submit={submit}/>
        <div className=" scroll   card_grid">

          {spaceXdata.map((item) =>
          (
            <Card item={item}  />


          ))}


        </div>
      </div>

      {/* spaexData */}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches?limit=10")
  const data = await res.json()
let array  =  []
  for (let i = 2006; i <=2020 ; i++) {
    array.push(i)
  }
  return {
    props: {
      data,
      array
    }
  }


}





