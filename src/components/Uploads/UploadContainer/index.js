import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUploads } from "../../../server";
import StyleUploadContainer from "./style";
import Loading from "../../UI/Loading";
import Container from "../../UI/Container";
import UploadElement from "../UploadElement";

const UploadContainer = () => {
  const uploads = useQuery(["uploads"], getUploads);

  return (
    <StyleUploadContainer>
      <Container>
        {!uploads.data && <Loading />}
        {uploads.data &&
          uploads.data.data.data.doc.map((el) => (
            <UploadElement
              key={el._id}
              name={el.name}
              by={`${el.userId.name} ${el.userId.surname}`}
              date={new Date(el.createdAt).toLocaleDateString()}
            />
          ))}
      </Container>
    </StyleUploadContainer>
  );
};

export default UploadContainer;
