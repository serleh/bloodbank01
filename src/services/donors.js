import axios from "axios";

const baseUrl = "http://localhost:3001/donors";

const create = (newDonor) => {
  const request = axios.post(baseUrl, newDonor);
  return request.then((res) => res.data);
};

export default { create };
