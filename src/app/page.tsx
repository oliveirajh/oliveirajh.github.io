import Image from 'next/image'
import profile from './../../public/img/profile.jpg';
import '../css/App.css';

export default function Home() {
  return (
      <header className="App-header">
        <Image src={profile} alt="Profile" className="profile"/>
        <p className="Title">
          OLIVEIRA JH PORTFOLIO
        </p>
        <p className="App-link">
          Coming Soon.
        </p>
      </header>
  )
}
