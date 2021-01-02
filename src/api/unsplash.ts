import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: "Client-ID AZ-f83hiCw7wX3WG-0UeXFdPtaFpYfliROGpR91ES9E",
  },
});
