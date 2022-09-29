import React from "react";
import styled from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'

export const ImageGalleryItem = ({ id, src, alt, srcLarge, openModal }) => {
    return (
        <li key={id} className={styled.ImageGalleryItem}>
            <img className={styled.ImageGalleryItem_image} src={src} alt={alt} data-large={srcLarge} onClick={openModal}/>    
        </li> 
    )
}

ImageGalleryItem.propTypes = {
    id: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
    srcLarge: PropTypes.string,
    openModal: PropTypes.func
}