import Image from 'next/image'
import styles from './footer.module.css'
export default function footer(){
    return (
        <footer id={styles.footer}>
            <div className='container'>
                <div className='col-12'>
                    <ul className={styles.footerMenu}>
                        <li className={styles.liFooter}>Política de privacidad</li>
                        <li className={styles.liFooter}>Política de cookies</li>
                        <li className={styles.liFooter}>Política de devoluciones</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}