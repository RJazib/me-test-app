import axios from 'axios';
export const getDataFromApi = async (searchQuery) => {
  const { data: response } = await axios.post('https://www.zaubacorp.com/custom-search', {
    "search": searchQuery,
    "filter": "company"
  });
  return response;
}
const url = 'http://localhost:8080/company'
export const addCompany = async (comp) => {
  let resp = axios.post(url, {
    "cin": comp.CIN,
    "name": comp.name
  })
    .then((res) => {
      if (res.status === 201) {
        window.location.href = "/companies";
      }
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    });
}

export const getCompanies = async () => {
  let rows = []
  let resp = await axios.get(url).then((res) => {
    rows = [...res.data]
    console.log("ROWS => ", rows)
    return rows
  }).catch((error) => {
    console.log(error)
  })
}