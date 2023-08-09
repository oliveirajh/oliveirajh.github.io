
import Header from '../components/Header'
import FixedSN from '@/components/FixedSN'
import Welcome from '@/components/Welcome'
import Skills from '@/components/Skills'

import "../css/global.css"

export default function Home() {
  return (
    <>
        <Header />
        <FixedSN />
        <Welcome/>
        <Skills />
    </>
  )
}
