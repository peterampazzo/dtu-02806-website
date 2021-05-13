import * as React from "react";
import Map from "../viz/map";

import { legend } from "../utils/map-colors";

const Maps = () => {
  return (
    <div className="my-4">
      <h1 className="text-center text-3xl mb-4">About your Neighborhood</h1>
      <div className="grid grid-cols-2 gap-4">
        <Map property={"b_seguretat"} title="Neighborhood security" />
        <Map property={"b_joc"} title="Neighborhood palygrounds" />
      </div>
      <div className="mt-8 p-4 flex justify-evenly align-center text-center">
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
