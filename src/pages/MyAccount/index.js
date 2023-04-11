import React, { useEffect } from "react";

const MyAccount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB | Account";
  }, []);

  return <div></div>;
};

export default MyAccount;
