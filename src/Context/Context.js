import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// Create Context
const AppContext = React.createContext();
// Create Provider Function
const AppProvider = ({ children }) => {
  const { id } = useParams(); // Access the ID from the URL
  const [station, setStation] = useState([]);
  const [Hindistation, setHindiStation] = useState([]);
  const [MasterStaions, setMasterStaions] = useState([]);
  // API-URL
  const API_URL1 = "https://lucknow-metro.circularjourney.com/api/";
  const API_URL =
    "http://test-api2-nearbymetro-com.secure52.ezhostingserver.com/api/";
  //   All Master Station
  const AllStations = async () => {
    const data = await axios.get(`${API_URL}Station/GetMaster`);
    setMasterStaions(data.data);
    console.log("allstatin", data);
  };
  // All Stations
  const getData = async () => {
    const data = await axios.get(`${API_URL}Station`);
    setStation(data.data);
  };
  // All Station in Hindi
  const getDataHindi = async () => {
    const data = await axios.get(`${API_URL}Station/Hindi`);
    setHindiStation(data.data);
  };
  useEffect(() => {
    AllStations();
    getData();
    getDataHindi();
  }, []);
  // return States
  return (
    <AppContext.Provider
      value={{
        station,
        API_URL1,
        API_URL,
        Hindistation,
        MasterStaions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
  // Provider Function End;
};
// Create global content
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, useGlobalContext };
