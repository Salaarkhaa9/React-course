import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
  //     fetch('https://api.github.com/users/Salaarkhaa9')
  //     .then(res=>res.json())
  //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     }
    //     )
    // },[])
    const data = useLoaderData()
  return (
    <div className="text-center m-4 bg-gray-500 text-white text-3xl p-4">
      Github Followers: {data.followers}
      <img
        className="items-center"
        src={data.avatar_url}
        alt="Git pic"
        width={300}
      ></img>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Salaarkhaa9")
  return response.json();
};
