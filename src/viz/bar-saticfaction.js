import React from "react";

import { ResponsiveBar } from "@nivo/bar";

import { colors_feeling } from "../utils/colors";
import data1 from "../data/satifaction-1.json";
import data2 from "../data/satifaction-2.json";

const SactifactionBarChart = ({ title, data, labels }) => {
  return (
    <div style={{ margin: `60px` }}>
      {title && <h1 className="mb-0">{title}</h1>}
      <div style={{ height: `450px`, marginTop: 0 }}>
        <ResponsiveBar
          data={data}
          keys={["Very", "Fairly", "Slightly", "Not at all", "NC"]}
          indexBy={labels}
          margin={{ top: 50, right: 130, bottom: 50, left: 200 }}
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
            legend: "Genres",
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
    </div>
  );
};

const Sactifaction = () => (
    <div>
        <SactifactionBarChart title="To what extent are you satisfied with your life?" data={data1} labels="district" />
        <SactifactionBarChart data={data2} labels="income" />
    </div>
);

export default Sactifaction;
