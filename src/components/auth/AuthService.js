import axios from "axios";

export async function login(creds, callback) {
  const response = await axios.post(
    process.env.REACT_APP_API_HOST + "auth/jwt/create/",
    creds
  );
  callback(response.data);
}
