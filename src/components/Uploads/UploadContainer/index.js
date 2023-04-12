import React from "react";
import StyleUploadContainer from "./style";
import Container from "../../UI/Container";
import UploadElement from "../UploadElement";

const UploadContainer = () => {
  return (
    <StyleUploadContainer>
      <Container>
        <UploadElement
          name="Linear Algebra notes"
          by="Laman Hasanli"
          date="09/12/2022"
        />
        <UploadElement
          name="Saduki P4.12 Solution"
          by="Turan Eminli"
          date="02/10/2023"
        />
        <UploadElement
          name="Internship letter sample"
          by="Nubar Hasanova"
          date="22/05/2019"
        />
        <UploadElement
          name="Mechanics lecture notes"
          by="Parvana Guliyeva"
          date="12/04/2020"
        />
        <UploadElement
          name="CS101 presentations"
          by="Kanan Mammadli"
          date="03/12/2022"
        />
        <UploadElement
          name="Thomas Calculus Ch3 solutions"
          by="Naila Dashdamili"
          date="26/11/2023"
        />
        <UploadElement
          name="Sample Internship Diary"
          by="Sona Mehdizada"
          date="15/03/2023"
        />
      </Container>
    </StyleUploadContainer>
  );
};

export default UploadContainer;
