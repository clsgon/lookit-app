import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import styles from './cartelera.module.css'
import axios from 'axios'

async function getFilms(){
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/v1/films");

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // You may want to handle the error appropriately in your application
  }
}

export default async function Home() {
  const films = await getFilms()
  return (
    <main>
      <div className='container' id={styles.billboard}>
          <div className={styles.scrollContainer}>
            {films.map((film) => {
              return (
                <Link href={`/film/${film._id}`} key={film._id} className={styles.linkFilm}>
                  <div  className={styles.film}>
                    <Image src={`/${film.image}`} alt="peli" width={150} height={200}  className={styles.imageFilm}/>
                    <div className={styles.filmDetails} style={{backgroundImage: `url(/${film.image})`}}>
                      <div className={styles.filmBlur}>
                        <h3 className={styles.filmTitle}>{film.name}</h3>
                        <p className={styles.filmDescription}>{film.description}</p>
                        <p className={styles.filmDuration}>{film.duration} mins</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
      </div>
    </main>
  )
}
