import React, { ChangeEvent, useState, SyntheticEvent } from 'react'

type SearchProps = {}

const Search: React.FC<SearchProps> = (props: SearchProps) : JSX.Element  => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    const handleClick = (e: SyntheticEvent) => {
        console.log(e);
    } 

    return (
        <div>
            <input value={search} onChange={ (e) => handleChange(e)}></input>
            <button onClick={ (e) => handleClick(e) }> asd</button>
        </div>
    )
}

export default Search;