
import "../css/global.css"
import Card from "./Card"

export default function Skills(){
    let Skill = [
        {icon: 'HTML'},
        {icon: 'CSS'},
        {icon: 'JavaScript'},
        {icon: 'Node.js'},
        {icon: 'React'},
        {icon: 'MySQL'},
        {icon: 'TailWindCSS'},
        {icon: 'MongoDB'}
    ]

    return(
            <div className='flex flex-col items-center justify-center align-center'>
                <h1 className="pb-4 md:pb-8 md:pt-0 text-xl md:text-4xl mycolor font-semibold">SKILLS</h1>
                <div className="w-9/12 gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                    {
                        Skill.map(e =>{
                            return <Card {...e} key={e.icon} />
                        })
                    }
                </div>
            </div>
    )
}