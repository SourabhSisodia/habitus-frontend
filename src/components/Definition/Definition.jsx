import "./Definition.css";
import card from "../../assets/hero.png"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { Autoplay , EffectCube , Pagination } from "swiper";
function Definition() {
  return (
    <>
      <div className="definition">
        <h1>WHAT IS HABITUS CO-WORKING?</h1>
        <p>
          The definition of co-working is when people assemble in a neutral
          space to effort independently on different projects and the same
          projects. It is different from an office workspace because the people
          in a co-working environment usually are not working for the same
          company. Habitus is an ideal coworking space designed with comfort and
          productivity in mind. Jam-packed with indispensable amenities, Habitus
          CoWorking Space caters to all the requirements of entrepreneurs,
          freelancers, startups, artists and individual content creators.
        </p>
      </div>
      <div className="definition-slider">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={ {clickable: true,}}
        modules={[Autoplay,EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={card}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={card}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={card}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={card}/>
        </SwiperSlide>
      </Swiper>        
      </div>
    </>
  );
}

export default Definition;
