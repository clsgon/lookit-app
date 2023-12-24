'use client'
import './scroll'
import Image from 'next/image'
import styles from './header.module.css'
import Link from 'next/link'

export default function Header(){
    return (
        <nav id={styles.nav}>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <ul id={styles.links}>
                            <li className={styles.link}><Image src={"/letterLogo.png"} width={80} height={30} alt='logo' /></li>
                            <li className={styles.link}><Link href={""} style={{textDecoration:'none', color:'#000'}}>Cartelera</Link></li>
                            <li className={`${styles.link} ${styles.dropdown}`}>
                                <button>Eventos</button>
                                <div className={styles.dropdown_content}>
                                    <Link href={""}>Alquiler</Link>
                                    <Link href={""}>V.O</Link>
                                </div>
                            </li>
                            <li className={styles.link}><Image className="image_reveal" src={"/icoLogo.png"} width={50} height={40} alt='logo' /></li>
                            <li className={`${styles.link} ${styles.dropdown}`}>
                                <button>Promociones</button>
                                <div className={styles.dropdown_content}>
                                    <Link href={""}>Ofertas</Link>
                                    <Link href={""}>Sorteos</Link>
                                    <Link href={""}>Regalos</Link>
                                </div>
                            </li>
                            <li className={`${styles.link} ${styles.dropdown}`}>
                                <button>Conócenos</button>
                                <div className={styles.dropdown_content}>
                                    <Link href={""}>FAQS</Link>
                                    <Link href={""}>Localizaciones</Link>
                                    <Link href={""}>Descripciones</Link>
                                </div>
                            </li>
                            <li className={`${styles.link} ${styles.dropdown}`}>
                                <Image src="/perfil.png" alt="perfil"  width={30} height={30}/>
                                <div className={`${styles.dropdown_content} ${styles.dropdown_last}`}>
                                    <Link href={""}>Log-In</Link>
                                    <Link href={""}>Sign-Up</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}