import * as React from "react";
import Map from "../viz/map";

import { legend } from "../utils/map-colors";

const Maps = () => {
  return (
    <div className="my-4">
      <h1>About your Neighborhood</h1>
      <div className="grid grid-cols-2 gap-4 pb-6">
        <Map property={"b_seguretat"} title="Neighborhood security" />
        <Map property={"b_joc"} title="Neighborhood palygrounds" />
      </div>
      <div className="mt-8 p-4 mx-auto max-w-3xl flex justify-evenly align-center text-center shadow-2xl rounded-lg bg-white text-black">
        {legend.map((item, index) => (
          <div key={index} className="text-xl">
            <div
              className="p-4 w-2 m-auto rounded-full"
              style={{ backgroundColor: item[1] }}
            ></div>
            {Math.round(item[0][0] * 100)}% - {Math.round(item[0][1] * 100)}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;
