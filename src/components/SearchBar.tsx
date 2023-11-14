import { useState } from "react";
import { FaSearch } from "react-icons/fa"

export const SearchBar = ({ SetSearchResults }: any) => {
    const [searchValue, setSearchValue] = useState('');

    const fetchData = (_value: string) => {
        fetch('/api/teams', {
            method: 'GET',
            headers: {
                'X-Auth-Token': '60aae18d99384f6e82c2e4ad7946e6f1',
            },
        })

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