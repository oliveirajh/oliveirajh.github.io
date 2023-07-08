import Image from 'next/image'
import profile from './../../public/img/profile.jpg';

import styles from "./../css/Main.module.css"
import "../css/global.css"

export default function Home() {
  return (
      <>
        <header className={styles.header}>
          <div className={styles.head}>
            <p className={styles.logo}>OLIVEIRA JH</p>
          </div>
        </header>
        <div className={styles.Appheader}>
          <Image src={profile} alt="Profile" className={styles.profile} />
          <p className={styles.Title}>
            OLIVEIRA JH PORTFOLIO
          </p>
          <p className={styles.Applink}>
            Coming Soon.
          </p>
        </div>
      </>
  )
}
