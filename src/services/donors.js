import axios from "axios";

const baseUrl = "https://bloodbank-backend01.onrender.com/api/donors";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const add = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((res) => res.data);
};

const search =(params)=>{
  const query = new URLSearchParams(params).toString()

  return axios.get(`${baseUrl}/search?${query}`).then(res=>res.data)
}

export default { getAll, add,search };
