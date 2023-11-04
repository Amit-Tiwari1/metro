import React from "react";
import { useGlobalContext } from "../../../Context/Context";
import { NavLink } from "react-router-dom";
import MasterLoader from "../../Static/Loader/MasterLoader";

const StationMaster = () => {
  const { MasterStaions } = useGlobalContext();
  if (MasterStaions.length === 0) {
    return <MasterLoader />;
  }

  return (
    <div>
      <div className="container">
        <div className="Rounded-Border">
          <div className="row justify-content-center p-3">
            <div className="col-md-8 col-12 shadow-sm ">
              <h3 className="text-center mt-2 text-muted">
                Search Metro Route in India
              </h3>
              {/* <NavLink to="lucknow">
                <div className="shadow-sm p-3 mb-3 mt-4 text-white rounded border theme_Color">
                  <h6 title="Lucknow Metro Routes Map">Lucknow</h6>
                </div>
              </NavLink> */}
              {MasterStaions.filter(
                (station) =>
                  station.name === "Lucknow" ||
                  station.name === "Kochi" ||
                  station.name === "Jaipur" ||
                  station.name === "Mumbai" ||
                  station.name === "Gurgaon"
              ).map((station) => {
                return (
                  <NavLink
                    to={`metroStation/${station.metro_ID}`}
                    key={station.metro_ID}
                  >
                    <div
                      className="shadow-sm p-3 mb-3 mt-4 text-white rounded border theme_Color"
                      onClick={() =>
                        localStorage.setItem(
                          "Station_Name",
                          JSON.stringify(station)
                        )
                      }
                    >
                      <h6 title={`${station.name} Metro Routes Map`}>
                        {station.name}&nbsp;Metro
                      </h6>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationMaster;
