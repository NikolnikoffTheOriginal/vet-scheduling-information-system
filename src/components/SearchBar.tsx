import { useState } from "react";
import { FaSearch } from "react-icons/fa"
import { db } from "../database/db";

export const SearchBar = ({ SetSearchResults }) => {
    const [searchValue, setSearchValue] = useState('');

    const fetchData = (value: string) => {
        db.cachedData.toArray().then((data: any[]) => {
            const filteredData = data.filter((team) => {
                return value && team && team.name && team.name.toLowerCase().includes(value.toLocaleLowerCase())
            })
            SetSearchResults(filteredData);
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