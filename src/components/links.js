import * as React from "react";
import Tooltip from "@material-ui/core/Tooltip";

import { FiGithub, FiFileText, FiHardDrive } from "react-icons/fi";

const Links = () => {
  const size = 60;

  const Button = ({ label, to, children }) => (
    <Tooltip title={label}>
      <a href={to}>{children}</a>
    </Tooltip>
  );
  return (
    <div
      style={{
        display: `flex`,
        margin: `auto`,
        fontSize: "20px",
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <Button label="Code" to="https://github.com/peterampazzo/dtu-02806">
        <FiGithub size={size} className="text-yellow-800" />
      </Button>
      <Button
        label="Dataset"
        to="https://opendata-ajuntament.barcelona.cat/data/en/dataset/ebsib-bcn-enquesta-benestar-subjectiu-infancia#fieldDescription"
      >
        <FiHardDrive
          size={size}
          style={{
            marginRight: `30px`,
            marginLeft: `30px`,
          }}
          className="text-yellow-800"
        />
      </Button>
      <Button label="Notebook" to="/main-explainer.html">
        <FiFileText size={size} className="text-yellow-800" />
      </Button>
    </div>
  );
};

export default Links;
