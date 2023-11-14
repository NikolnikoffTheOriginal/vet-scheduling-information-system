import { useState } from "react";
import { FaSearch } from "react-icons/fa"

export const SearchBar = ({ SetSearchResults }) => {
    const [searchValue, setSearchValue] = useState('');

    const fetchData = (value: string) => {
        const options = {
            method: 'GET',
            headers: {
                'X-Auth-Token': '60aae18d99384f6e82c2e4ad7946e6f1',
            },
        }

        fetch('/api/competitions/2021/teams', options)
            .then((response) => response.json())
            .then((data) => {
                const results = data.teams.filter((team: { name: string; }) => {
                    return (value && team && team.name && team.name.toLowerCase().includes(value.toLowerCase()));
                })
                SetSearchResults(results);
            })

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