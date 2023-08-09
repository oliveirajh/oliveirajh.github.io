import styles from "../css/Header.module.css"
import "../css/global.css"

export default function Header(){
    return(
        <header className='py-10 lg:py-0 w-screen box-border flex align-center justify-center'>
            <div className='  w-10/12 border-b-2 md:border-b-6 lg:border-b-2 flex-col lg:flex lg:flex-row items-center justify-between'>
                <p className=' flex-none mycolor text-4xl lg:text-4xl md:text-6xl font-bold text-center'>OLIVEIRA JH</p>
                <nav className="md:py-4 flex-col lg:w-1/2 flex lg:flex-row align-center text-center">
                    <a href="#" className="py-2 md:py-4  list-none w-screen self-center hover:bg-gray-900 hover:text-[#00FFA3]  md:text-4xl lg:text-xl">Hello</a>
                    <a href="#" className="py-2 md:py-4   list-none w-screen self-center hover:bg-gray-900 hover:text-[#00FFA3]  md:text-4xl lg:text-xl">Skills</a>
                    <a href="#" className="py-2 md:py-4  list-none w-screen self-center hover:bg-gray-900 hover:text-[#00FFA3]  md:text-4xl lg:text-xl">About Me</a>
                    <a href="#" className="py-2 md:py-4  list-none w-screen self-center hover:bg-gray-900 hover:text-[#00FFA3]  md:text-4xl lg:text-xl">Contact</a>
                </nav>
            </div>
        </header>
    )
}