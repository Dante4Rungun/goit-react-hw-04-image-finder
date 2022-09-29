import React, { useEffect, useState } from "react";
import styled from './ImageFinder.module.css'
import api from "services/api";
import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button";
import { Error } from "components/Error/Error";
import { Modal } from "components/Modal/Modal";
import { RotatingLines } from 'react-loader-spinner'
import { useFirstQuery } from "context/firstQueryContext";

export const ImageFinder = () => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(0)
    const [query, setQuery] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [modalSrc, setModalSrc] = useState('')
    const { isFirstQuery, setFirstQueryStatus, isButtonShow, setIsButtonShow } = useFirstQuery()

    const search = async (query) => {
        setQuery(query)
        setPage(1)
        setIsButtonShow(true)
    }

    const nextPage = async () => {
        setPage(prevPage => prevPage + 1)
    }

    useEffect(() => {
        async function fetchImages() {
            if (page === 1) {
                setIsLoading(prevLoading => !prevLoading)                
            }
            try {
                const imagesFetch = await api.fetchImagesWithQuery(query, page);
                page === 1 ? setImages(imagesFetch) : setImages(prevImages => [...prevImages,...imagesFetch])
            } catch (error) {
                setError({ error });
            } finally {
                if (page === 1) {
                    setIsLoading(prevLoading => !prevLoading)                
                }
            }
        }
        isFirstQuery === true ? setFirstQueryStatus() : fetchImages()
    }, [page, query])

    const onBackdropExit = (event) => {
        if (event.target.getAttribute('data-backdrop') != null) {
            setModalVisible(false)
        }
    }

    const onEsc = (event) => {
        if (event.key === "Escape") {
            setModalVisible(false)         
        }
    }

    const getSrcModal = (event) => {
        setModalSrc(event.target.getAttribute('data-large'))
        setModalVisible(true)
    }

     return (
        <div className={styled.imageFinder} onKeyDown={onEsc} tabIndex="0">
            <Searchbar searchFunc={search} />
            {error && <Error error={error} />}
            {isLoading === true ?
                <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
                 /> : <ImageGallery images={images} openModal={getSrcModal} page={page} />
            }
            <Button textContent="Load more" nextPage={nextPage} show={isButtonShow} />                    
            {modalVisible && <Modal src={modalSrc} onBackdropExit={onBackdropExit}/>}               
        </div>     
    )
}