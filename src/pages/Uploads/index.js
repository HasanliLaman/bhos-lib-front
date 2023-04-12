import React, { useEffect } from "react";
import Banner from "../../components/UI/Banner";
import UploadContainer from "../../components/Uploads/UploadContainer";

const Uploads = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "BHOS LIB | Uploads";
  }, []);

  return (
    <div>
      <Banner current="Uploads" />
      <UploadContainer />
    </div>
  );
};

export default Uploads;
