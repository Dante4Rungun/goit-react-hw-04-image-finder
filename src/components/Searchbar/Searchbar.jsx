import React from "react";
import styled from "./Searchbar.module.css"
import { AiOutlineSearch } from "react-icons/ai";
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types'
import { useState } from "react";

export const Searchbar = ({ searchFunc }) => {

    const [search, setSearch] = useState('')

    const inputOnChange = debounce((event) => {
        setSearch(event.target.value)
    }, 0)
    
    const onSubmitQuery = event => {
        event.preventDefault()
        searchFunc(search.trim().replace('  ',' '),'searchbar')
    }

    return (
        <header className={styled.searchbar}>
            <form className={styled.searchForm} onChange={inputOnChange} onSubmit={onSubmitQuery}>
                <button type="submit">
                    <AiOutlineSearch className="submit__icon"/>
                </button>
                <input
                    className={styled.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

Searchbar.propTypes = {
    search: PropTypes.func,
}