import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Container from "../../components/UI/Container";
import FileUpload from "../../components/Account/FileUpload";
import UserDetails from "../../components/Account/UserDetails";
import StyleMyAccount from "./style";
import Loading from "../../components/UI/Loading";
import { getMe } from "../../server";

const MyAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB | Account";
  }, []);

  const { data } = useQuery(["my-account"], getMe);

  return (
    <StyleMyAccount>
      <Container>
        {!data && <Loading />}
        {data && <UserDetails data={data.data.data.doc} />}
        <FileUpload />
      </Container>
    </StyleMyAccount>
  );
};

export default MyAccount;
