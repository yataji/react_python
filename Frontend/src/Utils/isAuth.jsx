import { verifyToken } from "../Api/axiosConfig";

export default function isAuth() {
  const jwt = localStorage.getItem("access");

  // console.log(jwt);
  // verifyToken(jwt)
  //   .then((response) => {
  //     console.log(response.data);
  //     return true;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     return false;
  //   });
  if (!jwt) {
    return false;
  }
  return jwt;
}
