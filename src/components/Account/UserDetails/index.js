import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Button from "../../UI/Button";
import StyleUserDetails from "./style";

const UserDetails = ({ data }) => {
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);

  const onLogout = () => {
    navigate("/signin");
    logOutUser();
  };

  return (
    <StyleUserDetails>
      <div className="photo">
        <img alt="avatar" src={data.photo} />
        <p>
          {data.name} {data.surname}
        </p>
      </div>
      <div className="details">
        <div>
          <span>Name</span>
          <p>{data.name}</p>
        </div>
        <div>
          <span>Surname</span>
          <p>{data.surname}</p>
        </div>
        <div>
          <span>Paternal name</span>
          <p>{data.paternalName}</p>
        </div>
        <div>
          <span>Major</span>
          <p>{data.workplace}</p>
        </div>
        <div>
          <span>Email</span>
          <p>{data.email}</p>
        </div>
        <div>
          <span>Address</span>
          <p>{data.address}</p>
        </div>
        <div>
          <span>Phone number</span>
          <p>{data.phone}</p>
        </div>

        <div>
          <span>ID number</span>
          <p>{data.IDNumber}</p>
        </div>
        <div>
          <span>Birth date</span>
          <p>{new Date(data.birthDate).toLocaleDateString()}</p>
        </div>
        <div>
          <span>Cart created at</span>
          <p>{new Date(data.createdAt).toLocaleDateString()}</p>
        </div>
        <Button text="Log out" onClick={onLogout} type="primary" />
      </div>
    </StyleUserDetails>
  );
};

export default UserDetails;
