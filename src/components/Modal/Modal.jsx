import React from "react";
import styled from './Modal.module.css'
import PropTypes from 'prop-types'

export const Modal = ({ onBackdropExit, src }) => {

    return (
        <div className={styled.backdrop} onClick={onBackdropExit} data-backdrop>
            <div className={styled.modal} >
                <img src={src} alt="" className={styled.modal__img} />
            </div>
        </div>
    )
}

Modal.propTypes = {
    onBackdropExit: PropTypes.func,
    src: PropTypes.string
}