import React, { useState } from 'react'
import { Table, TableRow, TableCell } from '@material-ui/core';
import { SearchBar } from '../components'

export default function SearchCompanies(props) {
    // search bar
    var companies = ["Facebook", "Instagram", "Reddit", "Twitter"]
    const [companyList, setCompanies] = useState(companies)
    async function handleChange(searchTerm) {
        setCompanies(companies.filter((company, key) => {
            if (company.toLowerCase().indexOf(searchTerm.toLowerCase()) === 0) {
                return company;
            }

            return 0;
        }));
    };

    return (
        <div>
            <SearchBar label="Search for our partners..." onChange={handleChange} />
            <div style={{ float: 'centre' }}>
                {companyList.map((company, idx) => {
                    return(
                        <p>{company}</p>
                    );
                })}
            </div>
        </div>
    )
}