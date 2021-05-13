import React from "react";

import { ResponsiveLine } from "@nivo/line";
import data1 from "../data/feeling-dist-1.json";
import data2 from "../data/feeling-dist-2.json";

const FeelingsDist = ({ index }) => {
  return (
    <div style={{ height: `450px`, marginTop: 0 }}>
      <ResponsiveLine
        data={index === 1 ? data1 : data2}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        // xScale={{
        //   type: "linear",
        //   min: "auto",
        //   max: "auto",
        //   stacked: true,
        //   reverse: false,
        // }}
        // yScale={{
        //   type: "linear",
        //   min: "auto",
        //   max: "auto",
        //   stacked: true,
        //   reverse: false,
        // }}
        // yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        //   axisBottom={{
        //     orient: "bottom",
        //     tickSize: 5,
        //     tickPadding: 5,
        //     tickRotation: 0,
        //     legend: "transportation",
        //     legendOffset: 36,
        //     legendPosition: "middle",
        //   }}
        //   axisLeft={{
        //     orient: "left",
        //     tickSize: 5,
        //     tickPadding: 5,
        //     tickRotation: 0,
        //     legend: "count",
        //     legendOffset: -40,
        //     legendPosition: "middle",
        //   }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        // onClick={ (e) => console.log(e.data.x, e.data.y) }
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default FeelingsDist;
