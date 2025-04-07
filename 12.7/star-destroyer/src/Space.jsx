import {useState, useRef} from 'react'

function Space() {
    const STAR_SIZE = 5;


    function getRandomPositions(){
        const x = Math.random() * (window.innerWidth - STAR_SIZE);
        const y = Math.random() * window.innerHeight
    }
}