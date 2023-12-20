import Image from 'next/image'
import './footer.css'
export default function footer(){
    return (
        <footer>
                <div class="links">
                    <ul>
                        <li><a href="">Features</a></li>
                        <li><a href="">Discover</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Templates</a></li>
                        <li><a href="">Updates</a></li>
                        <li><a href="">Downloads</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
                <div class="logo-container">
                    <Image src="/./img/logo/icoLogo.png" alt="icoLogo" width={30} height={30}/>
                    <Image src="/./img/logo/letterLogo.png" alt="letterLogo" width={30} height={30}/>
                </div>
        </footer>
    )
}