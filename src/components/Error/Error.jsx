import React from "react";
import styled from './Error.module.css'
import PropTypes from 'prop-types'

export const Error = ({error}) => {
    return (
        <p className={styled.error}>{error}</p>
    )
}

Error.propTypes = {
    error: PropTypes.string
}