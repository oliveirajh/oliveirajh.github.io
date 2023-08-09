import styles from "../css/Header.module.css"
import "../css/global.css"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function FixedSN(){
    return(
        <div className="overflow-hidden rounded-l-3xl flex-col flex space-y-4 justify-between fixed p-6 top-1/3 lg:top-[40%] lg:top-auto right-0 bg-gray-900 w-1/4 md:w-32 md:h-80 lg:w-28 lg:h-64">
                <a href=""><FaGithub size="60" color="#00FFA3"/></a>
                <a href=""><FaInstagram size="60" color="#00FFA3"/></a>
                <a href=""><FaLinkedin size="60" color="#00FFA3"/></a>
        </div>
    )
}