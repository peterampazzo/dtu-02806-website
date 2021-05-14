import * as React from "react";
import { ResponsiveRadar } from "@nivo/radar";
import { Checkbox, FormGroup, FormControlLabel } from "@material-ui/core";

import dataPositive from "../data/radar-positive.json";
import dataNegative from "../data/radar-negative.json";

import { colors_district } from "../utils/colors";
import districts from "../utils/districts";

const RadarPlot = ({ layers, data }) => {
  const LabelComponent = ({ id, anchor }) => (
    <g
      transform={`translate(${
        anchor === "end" ? -60 : anchor === "middle" ? -30 : 0
      }, -20)`}
    >
      <text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          fill: "#000",
        }}
      >
        {id}
      </text>
    </g>
  );

  return (
    <div style={{ height: `450px` }} id="radar">
      <ResponsiveRadar
        data={data}
        keys={layers}
        indexBy="value"
        maxValue="auto"
        margin={{ top: 80, right: 60, bottom: 10, left: 80 }}
        // curve="linearClosed"
        borderWidth={1}
        borderColor={(d) => colors_district[d.key]}
        gridLevels={5}
        gridShape="linear"
        gridLabelOffset={22}
        enableDots={false}
        colors={(d) => colors_district[d.key]}
        fillOpacity={0.5}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        isInteractive={true}
        gridLabel={LabelComponent}
        // legends={[
        //   {
        //     anchor: "top-left",
        //     direction: "column",
        //     translateX: -50,
        //     translateY: -40,
        //     itemWidth: 80,
        //     itemHeight: 20,
        //     itemTextColor: "#999",
        //     symbolSize: 12,
        //     symbolShape: "circle",
        // onMouseEnter: (d) => {
        //   const updatedValue = {};
        //   updatedValue[d.id] = dist_colors[d.id];
        //   setColors({
        //     ...focus,
        //     ...updatedValue,
        //   });
        //   setOpacity(0.85);
        // },
        // onMouseLeave: (d) => {
        //   setColors({
        //     ...dist_colors,
        //   });
        //   setOpacity(0.25);
        // },
        // onClick: (d) => {
        //   const updatedValue = {};
        //   updatedValue[d.id] =
        //     colors[d.id] !== dist_colors[d.id]
        //       ? dist_colors[d.id]
        //       : transparency; // #ddd
        //   setColors({
        //     ...colors,
        //     ...updatedValue,
        //   });
        // },
        //   },
        // ]}
      />
    </div>
  );
};

const RadarBox = () => {
  const [checkedValues, setCheckedValues] = React.useState([
    "Sarrià-Sant Gervasi",
    "Nou Barris",
  ]);

  const handleCheck = (x) => {
    setCheckedValues(
      checkedValues.includes(x)
        ? checkedValues.filter((c) => c !== x)
        : [...checkedValues, x]
    );
  };

  return (
    <div className="mx-auto max-w-6xl	border-2 border-dashed border-gray-600 my-6">
      <div className="p-4">
        <h1 className="text-center mb-4 text-xl">
          Feelings Radar
        </h1>
        <FormGroup
          row
          className="shadow-2xl mx-auto max-w-3xl p-4 bg-white rounded-lg justify-center"
        >
          {districts.map((item, index) => (
            <FormControlLabel
              control={
                <Checkbox
                  key={index}
                  onChange={() => handleCheck(item)}
                  style={{ color: colors_district[item] }}
                  checked={checkedValues.includes(item) ? true : false}
                  // labelStyle={{color: colors[item]}}
                  // iconStyle={{fill: colors[item]}}
                />
              }
              label={item}
              key={index}
            />
          ))}
        </FormGroup>
      </div>
      <div className="grid gap-4 grid-cols-2">
        <RadarPlot layers={checkedValues} data={dataPositive} />
        <RadarPlot layers={checkedValues} data={dataNegative} />
      </div>
    </div>
  );
};

export default RadarBox;
