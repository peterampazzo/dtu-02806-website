import * as React from "react";
import Map from "../viz/map";

import { legend } from "../utils/map-colors";

const Maps = () => {
  return (
    <div className="my-4" id="maps">
      <div className="grid grid-cols-2 gap-4 pb-6">
        <Map property={"b_seguretat"} title="Perception of district security" />
        <Map property={"b_joc"} title="Perception of district playground areas" />
      </div>
      <div className="mt-12 p-4 mx-auto max-w-3xl flex justify-evenly align-center text-center shadow-2xl rounded-lg bg-white text-black flex-col">
      <h1 className="text-lg italic text-center">Ratio of “Agreement”</h1>
        <div className="flex justify-evenly align-center">{legend.map((item, index) => (
          <div key={index} className="text-xl">
            <div
              className="p-4 w-2 m-auto rounded-full"
              style={{ backgroundColor: item[1] }}
            ></div>
            {Math.round(item[0][0] * 100)}% - {Math.round(item[0][1] * 100)}%
          </div>
        ))}</div>
      </div>
    </div>
  );
};

export default Maps;
