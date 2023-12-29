import axios from "axios" // para recoger de rutas
import styles from "./alquiler.module.css"
import Image from "next/image"

async function getAllRooms(){
    try{
        const rooms = await axios.get("http://127.0.0.1:8000/api/v1/rooms/") // api/v1 llama a la api, /rooms/ llama a las rutas y / llama a la funcion en el controlador
        console.log(rooms.data)
        return rooms.data
    }catch(error){
        console.error("Error: ", error)
        throw error
    }
}

export default async function Alquiler(){
    const rooms = await getAllRooms()

    const getScreenImage = (screen) => {
        if (screen === '4k') {
            return '/4k.png';
        } else if (screen === '8k') {
            return '/8k.png';
        }
    };

    return (
        <main className={styles.rooms}>
            {rooms.map((room) => {
                const screenImage = getScreenImage(room.screen);
                return (
                    <div key={room.id} className={styles.roomInfo}>
                        <div className={styles.rent}>
                            <Image src="/rent.png" width={25} height={25} alt="rent" />
                        </div> 
                        <div className={styles.imgContainer}>
                            <Image src={room.img} width={350} height={250} alt={room.img} className={styles.imgRoom} />
                        </div>      
                        <div className={styles.infoContiner}>
                            <div className={styles.info}>
                                <div>
                                <svg class="icon-seat" viewBox="0 0 24 20" width={25} height={25} className={styles.seat}><path class="st0" d="M22.7,0H21c-0.7,0-1.3,0.6-1.3,1.4v0.4v2.6c0-2-1.6-3.7-3.6-3.7H8c-2,0-3.6,1.7-3.6,3.7V1.8V1.4 C4.4,0.6,3.8,0,3,0H1.3C0.6,0,0,0.6,0,1.4v0.4v11.3v0.5c0,1,0.8,1.8,1.8,1.8h0.1c0.1,0,0.2,0,0.3,0h0.2l0,0H3v2.7 C3,19.1,3.8,20,4.9,20h14.3c1.1,0,1.9-0.9,1.9-1.9v-2.7h0.6l0,0h0.8c0.9-0.1,1.5-0.9,1.5-1.8v-0.5V1.8V1.4C24,0.6,23.4,0,22.7,0z" ></path></svg>
                                    <p>{room.capacity}</p>
                                </div>
                                <hr/>
                                <div>
                                    <Image src={screenImage} width={35} height={35} alt={room.screen} />
                                </div>
                                <hr/>
                                <div>
                                    <Image src="/sound.png" width={25} height={25} alt="aforo" />
                                    <p>{room.sound}</p>
                                </div>
                            </div>

                            <div className={styles.info}>
                                <div>
                                    <Image src="/precio.png" width={25} height={25} alt="aforo" />
                                    <p>{room.price}€</p>
                                </div>
                                <hr/>
                                <div>
                                    <Image src="/extraPerson.png" width={25} height={25} alt="aforo" />
                                    <p>{room.pricePersonExtra}€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </main>
    )
}