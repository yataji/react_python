import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { login, register } from "../Api/axiosConfig";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseMangeData, mangeData } from "../Context/useContext";

export function CardDefault(props) {
  const [getEmail, setEmailSignIn] = useState("");
  const [getPassword, getPasswordSignIn] = useState("");
  const [dataUser, setDataUser] = useState();
  // const { listData, setDataList } = UseMangeData();
  const Navigate = useNavigate();
  const handleChangeDataUserRegister = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  const handelEmailSignIn = (e) => {
    setEmailSignIn(e.target.value);
  };
  const handelPasswordSignIn = (e) => {
    getPasswordSignIn(e.target.value);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    register(dataUser)
      .then((response) => {
        console.log(response);
        alert("check your email to verify");
      })
      .catch((error) => {
        console.log("erroe message :", error);
        alert(error.response.data.password[0]);
      });
    // await Api.post("/api/profile/register", allDataSignUp);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const dataSignIn = {
      email: getEmail,
      password: getPassword,
    };
    // Api.post('/register', dataSignIn);
    login(dataSignIn)
      .then((response) => {
        console.log(response);
        // const token = {
        //   refresh: response.data.refresh,
        //   access: response.data.access,
        // };
        localStorage.setItem("refresh", response.data.refresh);
        localStorage.setItem("access", response.data.access);
        // setDataList(response.data.token);
        // console.log(listData);
        Navigate("/discover");
      })
      .catch((error) => {
        console.log("erroe message ", error);
      });
    // const login = await Api.post("/login", dataSignIn);
  };

  return (
    <Card
      className={`sm:w-[49%] w-full h-full shadow-none flex justify-center items-center rounded-none `}
    >
      <CardBody className="w-full flex justify-center items-center">
        {props.type === "Login" ? (
          <Typography
            variant="h5"
            color="blue-gray"
            className="flex flex-col justify-center items-center w-full"
          >
            <h2 className="mb-3">Login</h2>
            <div className="w-[80%] flex flex-col justify-center items-center gap-5">
              <Input
                onChange={handelEmailSignIn}
                type="email"
                label="Email"
                className=""
              />
              <Input
                onChange={handelPasswordSignIn}
                type="password"
                label="Password"
                className=""
              />
              <div className="mt-2 flex items-center gap-1 font-normal">
                <Typography variant="small" color="gray" className="text-black">
                  Forget your Password?{" "}
                </Typography>
                <Link
                  className="hover:text-red-500 text-sm text-slate-600"
                  to="/reset-password"
                >
                  Reset Password
                </Link>
              </div>
            </div>
          </Typography>
        ) : (
          <Typography
            variant="h5"
            color="blue-gray"
            className="flex flex-col justify-center items-center w-full"
          >
            <h2 className="mb-3">Register</h2>
            <div className="w-[80%] flex flex-col justify-center items-center gap-3">
              <div className="w-full">
                <Input
                  onChange={handleChangeDataUserRegister}
                  type="email"
                  label="email"
                  name="email"
                  className=""
                />
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center gap-1 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Exemple: email@exemple.exemple
                </Typography>
                <Input
                  onChange={handleChangeDataUserRegister}
                  type="text"
                  label="name"
                  name="name"
                  className=""
                />
              </div>
              <Input
                onChange={handleChangeDataUserRegister}
                type="password"
                label="password"
                name="password"
                className=""
              />
              <Input
                onChange={handleChangeDataUserRegister}
                type="password"
                label="re_password"
                name="re_password"
                className=""
              />
            </div>
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Use at least 8 characters, one uppercase, one lowercase and one
              number.
            </Typography>
          </Typography>
        )}
      </CardBody>
      {props.type === "Login" ? (
        <CardFooter className="">
          <Button onClick={handleSignIn}>sign in</Button>
        </CardFooter>
      ) : (
        <CardFooter className="">
          <Button onClick={handleSignUp}>sing up</Button>
        </CardFooter>
      )}
    </Card>
  );
}
