import { SearchResult } from "./SearchResult";

export const SearchResults = ({ searchResults }: any) => {
    return (
        <div className="flex bg-white flex-col shadow-md rounded-xl mt-4 overflow-y-auto max-h-80 absolute w-2/12">
            {
                searchResults.map((result: any, id: any) => {
                    return <SearchResult result={result} key={id}/>
                })
            }
        </div>
    );
}