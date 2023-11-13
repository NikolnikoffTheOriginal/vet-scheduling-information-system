import React from "react";

export const SearchResult = ({ result }: any) => {
    return (
        <div className="py-2.5 px-2.5 hover:bg-slate-100">{result.name}</div>
    );
}