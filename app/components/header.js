import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import './header.css'

export default function Header(){
    return (
        <header>
            <Script src="./scroll.js" />
            <ul>
                <li><Link href="/cartelera">Cartelera</Link></li>
                <li class="dropdown">
                    <button>Eventos</button>
                    <div class="dropdown-content">
                        <a href="">Alquiler</a>
                        <a href="">V.O</a>
                    </div>
                </li>
                <Image class="image_reveal social_img" src="/icoLogo.png" alt="logo" width={30} height={30}/>
                <li class="dropdown">
                    <button>Promociones</button>
                    <div class="dropdown-content">
                        <a href="">Ofertas</a>
                        <a href="">Sorteos</a>
                        <a href="">Regalos</a>
                    </div>
                </li>
                <li class="dropdown">
                    <button>Conócenos</button>
                    <div class="dropdown-content">
                        <a href="">FAQS</a>
                        <a href="">Localizaciones</a>
                        <a href="">Descripciones</a>
                    </div>
                </li>
                <div class="dropdown">
                    <Image src="/perfil.png" alt="perfil"  width={30} height={30}/>
                    <div class="dropdown-content dropdown-last">
                        <a href="">Log-In</a>
                        <a href="">Sign-In</a>
                    </div>
                </div>
            </ul>
        </header>
    )
}