import axios from 'axios';
export const getDataFromApi = async (searchQuery) => {
  const { data: response } = await axios.post('https://www.zaubacorp.com/custom-search', {
    "search": searchQuery,
    "filter": "company"
  });
  return response;
}

export const addCompany = async (comp) => {
  let resp = axios.post('http://localhost:8080/company', comp)
    .then((res) => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    });
}