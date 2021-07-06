import * as React from "react";

import Bar from "../viz/bar-intro";

const Intro = () => {
  const genderData = [{ value: "Gender", Boy: 50.3, Girl: 49.2, NC: 0.5 }];
  const genderLabels = ["Boy", "Girl", "NC"];

  const gradeData = [{ value: "Grade", "5è": 50.2, "6è": 49.9 }];
  const gradeLabels = ["5è", "6è"];
  const ageData = [
    { value: "Age", 9: 0.1, 10: 38.7, 11: 48.4, 12: 12.1, 13: 0.4, NC: 0.3 },
  ];
  const ageLabels = [ "11", "10", "12", "13", "NC", "9"];
  const birthPlaceData = [
    {
      value: "Birthplace",
      Catalonia: 85.5,
      "In another country": 9.6,
      "Rest of Spain": 3.5,
      "I'm not sure": 1.1,
      NC: 0.2,
    },
  ];
  const birthPlaceLabels = [
    "Catalonia",
    "In another country",
    "Rest of Spain",
    "I'm not sure",
    "NC",
  ];

  return (
    <div class="grid grid-cols-2">
      <Bar data={genderData} labels={genderLabels} />
      <Bar data={gradeData} labels={gradeLabels} />
      <Bar data={ageData} labels={ageLabels} />
      <Bar data={birthPlaceData} labels={birthPlaceLabels} />
    </div>
  );
};

export default Intro;
