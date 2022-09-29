import React from "react";
import styled from './Button.module.css'
import PropTypes from 'prop-types'

export const Button = ({ nextPage, textContent, show }) => {
    return (
        <div className={ styled.buttonContainer }>
            {show === true ? <button className={styled.button} onClick={nextPage}>{textContent}</button> : ''}  
        </div>
    )
}

Button.propTypes = {
    nextPage: PropTypes.func,
    textContent: PropTypes.string
}