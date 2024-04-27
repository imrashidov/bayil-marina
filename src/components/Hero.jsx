import data from "../data/data";
import hero from "../../public/hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container relative ">
        <Swiper
          className="swiper-hero"
          direction={"horizontal"}
          loop={true}
          initialSlide={1}
          pagination={{
            el: ".hero-pagination",
            clickable: true,
            bulletClass: "hero-bullet",
            bulletActiveClass: "hero-bullet-active",
          }}
          modules={[Pagination]}
          breakpoints={{
            1024: {
              direction: "vertical",
            },
          }}
        >
          {data.heroImg.map((img) => (
            <SwiperSlide key={img.id} className="swiper-hero-slide">
              <img src={hero} alt="Hero Image" />
            </SwiperSlide>
          ))}
          <div className="hero-controller">
            <div className="hero-pagination"></div>
          </div>
        </Swiper>
        <div className="hero-main">
          <div className="hero-contact">
            {data.heroContact.map((contact) => (
              <div key={contact.id} className="contact-items">
                {contact.icon && <img src={contact.icon} alt="icon" />}
                <p>{contact.text}</p>
                <p>{contact.title}</p>
                {contact.icons &&
                  contact.icons.map((icon) => (
                    <img key={icon.id} src={icon.icon} alt="icon" />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
