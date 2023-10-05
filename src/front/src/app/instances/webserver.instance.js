import axios from "axios";

const webserverInstance = axios.create({
  baseURL: "/rest_api",
});

export default webserverInstance;
