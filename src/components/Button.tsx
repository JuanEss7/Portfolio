
import { FaArrowUpLong } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { useObserver } from "../hooks/useObserver";
import './button.css'
function Button() {
    const { entries, setElements } = useObserver({ threshold: 0.5 });
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const home = document.getElementById('home');
        setElements([home!])
    }, [])
    useEffect(() => {
        if (!entries) return
        if (!entries[0].isIntersecting) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [entries])
    return (
        <a className={`button_scroll ${isVisible ? "visible" : ""}`} href="#home" >
            <FaArrowUpLong className="arrow" fill="#fff" size={18} />
        </a>
    )
}

export default Button