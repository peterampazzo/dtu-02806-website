import * as React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import SatisfactionBarChart from "../viz/bar-satisfaction";

import data1 from "../data/satifaction-1.json";
import data2 from "../data/satifaction-2.json";
import data3 from "../data/satifaction-3.json";

const SatisfactionPlots = () => {
  const [data, setData] = React.useState(data1);
  const [labels, setLabels] = React.useState("district");
  const [legend, setLegend] = React.useState({xLabel: "Districts", offset: -140});
  const [plot, setPlot] = React.useState("1");

  React.useEffect(() => {
    if (plot === "1") {
      setData(data1);
      setLabels("district");
      setLegend({xLabel: "Districts", offset: -110});
    } else if (plot === "2") {
      setData(data2);
      setLabels("income");
      setLegend({xLabel: "Incomes", offset: -200});
    } else if (plot === "3") {
      setData(data3);
      setLabels("concern");
      setLegend({xLabel: "Concerns", offset: -80});
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
      <h1 className="mb-4">To what extent are you satisfied with your life?</h1>
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
        <FormControlLabel value={"1"} control={<Radio />} label="Districts" />
        <FormControlLabel value={"2"} control={<Radio />} label="Incomes" />
        <FormControlLabel value={"3"} control={<Radio />} label="Monetary Concerns" />
      </RadioGroup>
      <SatisfactionBarChart data={data} labels={labels} xAxisLabel={legend} />
    </div>
  );
};

export default SatisfactionPlots;
