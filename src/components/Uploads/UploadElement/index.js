import React from "react";
import pdf from "../../../assets/images/icon-pdf.svg";
import file from "../../../assets/files/file.pdf";
import StyleUploadElement from "./style";

const UploadElement = ({ name, date, by }) => {
  return (
    <StyleUploadElement href={file} download>
      <img src={pdf} alt="pdf" />
      <p>Name: {name}</p>
      <p>By: {by}</p>
      <p>Date: {date}</p>
    </StyleUploadElement>
  );
};

export default UploadElement;
