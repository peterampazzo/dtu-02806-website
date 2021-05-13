import React from "react";

import { ResponsiveBar } from "@nivo/bar";
import data from "../data/feeling-bar-chart.json";

const FeelingsBarChart = () => {
  const colors = {
    NC: "#EDF6CA",
    0: "#d9ed92",
    1: "#b5e48c",
    2: "#99d98c",
    3: "#76c893",
    4: "#52b69a",
    5: "#34a0a4",
    6: "#168aad",
    7: "#1a759f",
    8: "#1e6091",
    9: "#184e77",
    10: "#0E2C44",
  };
  return (
    <div style={{ marginTop: `60px`, marginBottom: `60px` }}>
      <h1 className="text-3xl text-center mb-0">The Feelings</h1>
      <div style={{ height: `450px`, marginTop: 0 }}>
        <ResponsiveBar
          data={data}
          keys={["NC", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
          indexBy="feeling"
          margin={{ top: 50, right: 130, bottom: 50, left: 90 }}
          padding={0.3}
          layout="horizontal"
          enableLabel={false}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={(d) => colors[d.id]}
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
          axisLeft={{
            tickSize: 0,
            legend: "Ratio of Collaborations",
            legendPosition: "middle",
            legendOffset: -70,
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
    </div>
  );
};

export default FeelingsBarChart;
