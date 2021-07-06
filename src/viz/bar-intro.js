import React from "react";

import { ResponsiveBar } from "@nivo/bar";
const colors = [
  "#6A4C93",
  "#1982C4",
  "#8AC926",
  "#FFCA3A",
  "#FF595E",
  "#00378F",
];

const IntroBarChart = ({ data, labels }) => {
  return (
    <div style={{ height: `200px` }}>
      <ResponsiveBar
        data={data}
        keys={labels}
        indexBy="value"
        margin={{ top: 40, right: 160, bottom: 70, left: 130 }}
        padding={0.3}
        layout="horizontal"
        enableLabel={false}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={colors}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        tooltip={({ id, value, color }) => (
          <strong style={{ color }}>
            {id}: {value}
          </strong>
        )}
        theme={{
          tooltip: {
            container: {
              background: "#fff",
            },
          },
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          legend: "Ratio of participant",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        //   axisLeft={{
        //     tickSize: 0,
        //     legend: "Ratio of Collaborations",
        //     legendPosition: "middle",
        //     legendOffset: -70,
        //   }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};

export default IntroBarChart;
