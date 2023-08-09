
import "../css/global.css"
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiMysql, SiTailwindcss, SiMongodb } from 'react-icons/si';

type Props = {
    icon: string,
    size?: number,
    color?: string
}

export default function Card({icon, size = 100, color = '#00FFA3'}: Props){

    function CheckSkill(){
        switch (icon.toLowerCase()){
            case 'html':
                return <SiHtml5 size={100} color={color}/>
            case 'css':
                return <SiCss3 size={size} color={color}/>
            case 'javascript':
                return <SiJavascript size={size} color={color}/>
            case 'node.js':
                return <SiNodedotjs size={size} color={color}/>
            case 'react':
                return <SiReact size={size} color={color}/>
            case 'mysql':
                return <SiMysql size={size} color={color}/>
            case 'tailwindcss':
                return <SiTailwindcss size={size} color={color}/>
            case 'mongodb':
                return <SiMongodb size={size} color={color}/>
            default:
                return;
        }
    }


    return(
        <div className='bg-[#171E28] lg:py-6 md:p-8 p-4 md:w-full lg:w-3/4 h-full flex items-center justify-center flex-col text-center'>
            {CheckSkill()}
            <p className=" pt-4 mycolor text-1xl md:text-3xl lg:text-xl font-medium">{icon}</p>
        </div>
    )
}