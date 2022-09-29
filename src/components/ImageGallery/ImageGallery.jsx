import React from "react";
import styled from './ImageGallery.module.css'
import PropTypes, { object } from 'prop-types'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, openModal, page }) => {
    return (
        <ul className={styled.ImageGallery}>
            {images.slice(0, 12*page).map(image => (
                <ImageGalleryItem id={image.id} src={image.webformatURL} srcLarge={image.largeImageURL} alt="photo" openModal={openModal} />
            ))}
        </ul> 
    )
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(object),
    openModal: PropTypes.func
}