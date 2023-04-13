import React from "react";
import StyleFileUpload from "./style";
import upload from "../../../assets/images/icon-upload.svg";
import Button from "../../UI/Button";

const FileUpload = () => {
  return (
    <StyleFileUpload>
      <img src={upload} alt="upload" />
      <p>Drag and drop a file here or</p>
      <Button text="Upload" type="primary" />
    </StyleFileUpload>
  );
};

export default FileUpload;
