// import React, { useEffect, useState } from "react";
import StationOptions from "../components/Dynamic/StationOptions/StationOptions";
import Footer from "../components/Static/Footer/Footer";
import TitleHeader from "../components/Static/Header/TitleHeader";
// import axios from "axios";
// import { useGlobalContext } from "../Context/Context";
// import { useParams } from "react-router-dom";
const Lucknow = () => {
  const StationName = JSON.parse(localStorage.getItem("Station_Name")).name;
  console.log(StationName);
  // const [allMetroId, setAllMetroId] = useState([]);
  // const { id } = useParams();

  // const {API_URL} = useGlobalContext();
  // // get  metro id
  // const GetAllMetroID = async () => {
  //   const data = await axios.get(`${API_URL}Station/GetMasterStation?id=${id}`);
  //   setAllMetroId(data.data)
  //   // console.log("data",data.data);
  // }
  // useEffect(()=>{
  //   GetAllMetroID()
  // },[id])
  // console.log("allMetroId",allMetroId[0].station_Name);

  
  return (
    <>
      <div>
        <TitleHeader title={StationName} />
        <StationOptions />
        <Footer />
      </div>
    </>
  );
};

export default Lucknow;
