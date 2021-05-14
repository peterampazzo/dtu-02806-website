import * as React from "react";
import Tooltip from "@material-ui/core/Tooltip";

import { FiGithub, FiFileText, FiHardDrive } from "react-icons/fi";

const Links = () => {
  const size = 60;
  const color = `#3cb371`;

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
      <Button label="Code" to="#">
        <FiGithub size={size} style={{ color: color }} />
      </Button>
      <Button label="Data set" to="#">
        <FiHardDrive
          size={size}
          style={{
            marginRight: `30px`,
            marginLeft: `30px`,
            color: color,
          }}
        />
      </Button>
      <Button label="Jupyter Notebook" to="#">
        <FiFileText size={size} style={{ color: color }} />
      </Button>
    </div>
  );
};

export default Links;
