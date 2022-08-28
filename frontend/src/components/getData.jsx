import React, { useEffect } from 'react';
import { useState } from 'react';
import useFetchData from '../hooks/fetchData'
import SearchDropDown from "./autocomplete"

const MyComponent = () => {
  const {
    data,
    loading,
  } = useFetchData();

  const [companies, setCompanies] = useState([])

  const createNode = (htmlStr) => {
    const doc = new DOMParser().parseFromString(htmlStr, 'text/html');
    const element = doc.body.children;
    return element;
  };

  useEffect(() => {
    const body = createNode(data);
    const arr = []
    for (let com of body) {
      let c = com.id
      arr.push({
        "CIN": c.substring(c.lastIndexOf('/') + 1),
        "name": c.substring(c.indexOf('/') + 1, c.lastIndexOf('/'))
      })
    }
    setCompanies(arr)
    console.log("Data => ", arr)
  }, [data])

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <SearchDropDown data={companies}></SearchDropDown>
        </div>
      )}
    </div>
  )
}

export default MyComponent;