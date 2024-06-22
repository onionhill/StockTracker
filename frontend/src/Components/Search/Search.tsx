import React, { useState } from 'react'

type SearchProps = {}

const Search: React.FC<SearchProps> = (props: SearchProps) : JSX.Element  => {
    const [search, setSearch] = useState<string>("");

    const onClick = (e: any) => {
        setSearch(e.target.value);
        console.log(e);
    }

    return (
        <div>
            <input value={search} onChange={ (e) => onClick(e)}></input>
        </div>
    )
}

export default Search;