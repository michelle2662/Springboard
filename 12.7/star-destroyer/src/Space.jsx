import {useState, useEffect} from 'react'
import Star from './Star'

function Space() {
    const STAR_SIZE = 5;

    const [stars,setStars] = useState([])
    const generateStar = () => {
        const x = Math.random() * (window.innerWidth - STAR_SIZE);
        const y = Math.random() * window.innerHeight

        const newId = Date.now() + Math.random()
        return {
            id: newId,
            position:  {x,y}
        }
    }

    const addStar = () => {
        setStars(prevStars => 
            [...prevStars, generateStar()])
    }

    function destroyStar(id) {
        setStars(prevStars => 
            prevStars.filter((star) => star.id !== id))
    }


    useEffect(() => {
        const intervalId = setInterval(addStar, 2500);
        return () => clearInterval(intervalId);

    },[])

    return (
        <div>
            {stars.map((star) =>(
                
                <Star key = {star.id} id = {star.id} position={star.position} destroyStar={destroyStar} />
            ))}
        </div>
    )

}

export default Space
