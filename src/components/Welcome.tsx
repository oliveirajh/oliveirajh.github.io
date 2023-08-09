/* eslint-disable react/no-unescaped-entities */
import styles from "../css/Welcome.module.css"
import "../css/global.css"

import Image from 'next/image'
import profile from './../../public/img/profile.jpg';

export default function Welcome(){
    return(
        <div className="w-screen md:my-4 mb-8 flex align-center justify-center">
            <div className="w-9/12 h-full flex-col flex lg:flex-row align-center lg:justify-between">
                <Image src={profile} alt="Profile" className="lg:w-1/3 lg:h-1/3 md:w-4/5 md:self-center rounded-full border-8 ring-[#00FFA3] border-[#00FFA3]"/>
                <div className="lg:h-full lg:w-1/2 lg:self-center lg:text-start text-center md:my-16 my-4 lg:my-0">
                    <h1 className="text-xl md:text-4xl">HI, I'M <a className="font-semibold text-[#00FFA3]">JOÃO HENRIQUE DE OLIVEIRA</a></h1>
                    <br></br>
                    <h1 className="text-xl font-semibold text-[#00FFA3] md:text-4xl lg:text-3xl">FULL-STACK DEVELOPER</h1>
                </div>
            </div>
        </div>
    )
}