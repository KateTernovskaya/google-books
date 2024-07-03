import React, {useEffect, useState} from 'react';
import {animateScroll as scroll} from "react-scroll";
import {IconButton} from "@mui/material";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


export const GoTopBtn: React.FC = () => {

    const [showBtn, setShowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <IconButton type="button" aria-label="search" onClick={() => {
                    scroll.scrollToTop()
                }}>

                    <ArrowCircleUpIcon fontSize="large" color="primary"/>
                </IconButton>

            )}
        </>
    );
};

