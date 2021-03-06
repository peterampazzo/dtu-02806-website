import * as React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import SatisfactionBarChart from "../viz/bar-satisfaction";

import data1 from "../data/gender.json";
import data2 from "../data/age.json";
import data3 from "../data/learning.json";

const OverviewPlots = () => {
  const [data, setData] = React.useState(data1);
  const [labels, setLabels] = React.useState("concern");
  const [legend, setLegend] = React.useState({xLabel: "Genders", offset: -140});
  const [plot, setPlot] = React.useState("1");

  React.useEffect(() => {
    if (plot === "1") {
      setData(data1);
      setLegend({xLabel: "Genders", offset: -70});
    } else if (plot === "2") {
      setData(data2);
      setLegend({xLabel: "Ages", offset: -70});
    } else if (plot === "3") {
      setData(data3);
      setLegend({xLabel: "Learning Difficulties", offset: -80});
    }
  }, [plot]);

  return (
    <div
      style={{
        margin: `auto`,
        fontSize: "20px",
        justifyContent: `center`,
        alignItems: `center`,
        flexDirection: `column`,
      }}
    >
      {/* <h1 className="mb-4">To what extent are you satisfied with your life?</h1> */}
      <RadioGroup
        aria-label="plot"
        name="plot"
        value={plot}
        className="flex justify-center mb-0"
        onChange={(e) => {
          setPlot(e.target.value);
        }}
        row
      >
        <FormControlLabel value={"1"} control={<Radio />} label="Gender" />
        <FormControlLabel value={"2"} control={<Radio />} label="Age" />
        <FormControlLabel value={"3"} control={<Radio />} label="Learning Difficulties" />
      </RadioGroup>
      <SatisfactionBarChart data={data} labels={labels} xAxisLabel={legend} />
    </div>
  );
};

export default OverviewPlots;
