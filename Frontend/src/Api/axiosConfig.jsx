import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "Application/json",
    "X-CSRFToken":
      "4yVFtgjRUs8oSHyxOYdi1mynmB1pEjm7SV8rWjlt4x1IA0Cuhm1DRCqvbwGin8ef",
  },
});

export async function register(user) {
  console.log(user);
  return await Api.post("/auth/users/", user);
}

export function login(user) {
  console.log(user);
  return Api.post("/auth/jwt/create/", user);
}

export const verifyToken = async (jwt) => {
  return await Api.post("/auth/jwt/verify/", jwt);
};

export const sendResetPassword = async (email) => {
  return await Api.post("/auth/users/reset_password/", email);
};

export const resetConfirmationPassword = async (user) => {
  console.log(user);
  return await Api.post("/auth/users/reset_password_confirm/", user);
};

export const activateUser = async (user) => {
  console.log(user);
  return await Api.post("/auth/users/activation/", user);
};

export function addLocal(local) {
  return Api.post("create-local/locals/", local);
}

export function getAllLocals() {
  return Api.get("create-local/locals/");
}
