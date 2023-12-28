'use client';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './cartelera.css';

export default function Cartelera() {
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: true,
  };

  return (
    <main>
      <div class="cartelera">
        <div class="soon-drop">
          <p>Próximos lanzamientos</p>
          <Slider {...sliderSettings}>
            {[...Array(5)].map((_, index) => (
              <div key={index} class="film">
                <Image src="/avatar.jpg" alt={`peli${index}`} width={200} height={200} />
              </div>
            ))}
          </Slider>
        </div>

        <div class="most-sold">
          <p>Más vendidas</p>
          <Slider {...sliderSettings}>
            {[...Array(5)].map((_, index) => (
              <div key={index} class="film">
                <Image src="/avatar.jpg" alt={`peli${index}`} width={200} height={200} />
              </div>
            ))}
          </Slider>
        </div>

        <div class="last-drop">
          <p>Últimos lanzamientos</p>
          <Slider {...sliderSettings}>
            {[...Array(5)].map((_, index) => (
              <div key={index} class="film">
                <Image src="/avatar.jpg" alt={`peli${index}`} width={200} height={200} />
              </div>
            ))}
          </Slider>
        </div>

        <div class="all-films">
          <p>Todos</p>
          <Slider {...sliderSettings}>
            {[...Array(5)].map((_, index) => (
              <div key={index} class="film">
                <Image src="/avatar.jpg" alt={`peli${index}`} width={200} height={200} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
}
