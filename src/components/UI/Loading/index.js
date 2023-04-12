import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import StyleLoading from "./style";

library.add(faSpinner);

const Loading = ({ style }) => {
  return (
    <StyleLoading style={style}>
      <FontAwesomeIcon
        icon="fa-spinner"
        spin
        style={{
          color: "#444",
          fontSize: "6rem",
        }}
      />
    </StyleLoading>
  );
};

export default Loading;
