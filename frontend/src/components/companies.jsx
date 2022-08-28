import React, { useEffect, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { getCompanies } from '../services/srCompanies';
import axios from 'axios';
import CpButton from './button';

const columns = [
  { field: 'cin', headerName: 'CIN', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
];

const CompaniesPage = () => {
  const [rows, setRows] = useState([])
  useEffect(() => {
    const getRows = async () => {
      axios.get('http://localhost:8080/company').then((res) => {
        setRows(res.data)
      }).catch((error) => {
        console.log(error)
      })
      console.log("Rows => ", rows);
    }
    getRows();
  }, []);

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <CpButton label={"Company+"} onClick={() => window.location.href = "/add-company"} />
      </div>
      <div >
        <DataGrid rows={rows}
          columns={columns}
          style={{ height: 400, width: '100%', padding: "10px" }}
        />
      </div>
    </div>
  );

}

export default CompaniesPage;