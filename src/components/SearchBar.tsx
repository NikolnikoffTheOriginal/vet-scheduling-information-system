import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"

export const SearchBar = ({ SetSearchResults }) => {
    const [searchValue, setSearchValue] = useState('');

    const fetchData = (value: string) => {
        const options = {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
                'X-Auth-Token': '60aae18d99384f6e82c2e4ad7946e6f1'
            }
        }
        fetch('https://api.football-data.org/v4/matches', options)

            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    const handleChange = (value: string) => {
        setSearchValue(value)
        fetchData(value)
    }

    return (
        <div className="flex h-10 shadow-md items-center rounded-xl bg-white px-3">
            <FaSearch size={18} />
            <input
                placeholder="Search..."
                className="focus:outline-none bg-transparent border-none h-full ml-2 text-xl"
                onChange={(e) => handleChange(e.target.value)}
                value={searchValue}
            />
        </div>
    )
}