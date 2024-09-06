import React from 'react'
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import './style.css'
interface Props {
    nombre: string;
    descripcion: string;
    tech: string[]
}
function CardProyect({ nombre, descripcion, tech }: Props) {
    return (
        <div className="proyecto">
            <img src="" alt="" />
            <div className="proyecto_info">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <ul>
                    {tech.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                    <li className="li_icons">
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/juanessanchez"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LuExternalLink size={20} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardProyect