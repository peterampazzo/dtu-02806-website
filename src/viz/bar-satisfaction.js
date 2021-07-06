import React from "react";

import { ResponsiveBar } from "@nivo/bar";
import { colors_feeling } from "../utils/colors";

const SatisfactionBarChart = ({ data, labels, xAxisLabel }) => {

  const { xLabel, offset } = xAxisLabel;

  return (
    <div style={{ height: `300px`, maxWidth: `960px` }} className="mx-auto">
      <ResponsiveBar
        data={data}
        keys={["Very", "Fairly", "Slightly", "Not at all", "NC"]}
        indexBy={labels}
        margin={{ top: 0, right: 130, bottom: 70, left: 220 }}
        padding={0.3}
        layout="horizontal"
        enableLabel={false}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={(d) => colors_feeling[d.id]}
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
          legend: "Ratio of answers per level",
          legendPosition: "middle",
          legendOffset: 32,
        }}
          axisLeft={{
            tickSize: 0,
            legend: xLabel,
            legendPosition: "middle",
            legendOffset: offset,
          }}
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

export default SatisfactionBarChart;
