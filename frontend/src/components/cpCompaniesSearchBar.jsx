import * as React from 'react';
import { useState, useEffect, Fragment } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { createNode } from '../utils/utCompanies';
import { addCompany, getDataFromApi } from '../services/srCompanies';
import { Stack } from '@mui/system';
import CpButton from './button';



const CompaniesSearchBar = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const searching = open && options.length === 0;
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCompany, setSelectedCompany] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery == "") {
          setOptions([])
        } else {
          const body = createNode(await getDataFromApi(searchQuery));
          const companyiesArray = []
          for (let company of body) {
            let com = company.id
            companyiesArray.push({
              "CIN": com.substring(com.lastIndexOf('/') + 1),
              "name": com.substring(com.indexOf('/') + 1, com.lastIndexOf('/'))
            })
          }
          setOptions([...companyiesArray]);
        }
      } catch (error) {
        console.error(error)
      }
    };

    fetchData();
  }, [searchQuery])

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Stack container spacing={2}>
      <Autocomplete
        sx={{ width: 300 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}

        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={searching}
        onChange={(_event, value) => setSelectedCompany(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Companies"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <Fragment>
                  {searching ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
        )}
      />
      <CpButton
        label={"Submit"}
        disabled={Object.keys(selectedCompany || {}).length === 0}
        onClick={() => { addCompany(selectedCompany) }}
      />
    </Stack>
  );
}
export default CompaniesSearchBar;