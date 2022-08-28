import React, { Component } from 'react';

const CompaniesPage = () => {

   return (
      <div>
         <input type="text" placeholder='Search companies' id='searcCompanies'
            onChange={console.log("comapany")} />
         <button>Search</button>
      </div>
   );

}

export default CompaniesPage;