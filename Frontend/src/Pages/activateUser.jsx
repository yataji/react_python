import React, { useEffect } from "react";
import { activateUser } from "../Api/axiosConfig";
import { useNavigate, useParams } from "react-router-dom";

const ActivateUser = () => {
  const { uid, token } = useParams();
  const Navigate = useNavigate();
  useEffect(() => {
    activateUser({ uid, token })
      .then((res) => {
        console.log(res);
        Navigate("/");
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex justify-center items-center">ActivateUser...</div>
  );
};

export default ActivateUser;
