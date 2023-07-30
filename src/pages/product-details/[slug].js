import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Link from "next/link";
import Form from "@/Components/Form/Form";
import "./style.css";
import "../../app/globals.css";
import Footer from "@/Components/Footer/Footer";
import BackToTopButton from "@/Components/BackToTopButton/BackToTopButton";
import SocialMedia from "@/Components/SocialMedia/index";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    name: "Çocuk ve Genç Odası Tasarımlarımız",
    images: [""] /*['/Images/youngroom1.jpg', /* '/Images/youngroom2.jpg']*/,
    slug: "cocuk-ve-genç-odası-tasarımlarımız",
  },
  {
    name: "Mutfak Tasarımlarımız",
    images: [
      "/Images/mutfakTasarımlarımız.jpg",
      "/Images/kitchen1.jpg",
      "/Images/kitchen2.jpg",
      "/Images/kitchen4.jpg",
      "/Images/images1.jpg",
      "/Images/images1.jpg",
      "/Images/images1.jpg",
    ] /*[/*'/Images/kitchen1.jpg', '/Images/kitchen2.jpg', '/Images/kitchen3.jpg', '/Images/kitchen4.jpg']*/,
    slug: "mutfak-tasarımlarımız",
  },
  {
    name: "Yemek Masası Tasarımlarımız",
    images: [""], //'/Images/dinnertable1.jpg' /*['/Images/dinnertable1.jpg']*/
    slug: "yemek-masası-tasarımlarımız",
  },
  {
    name: "Yatak Odası Tasarımlarımız",
    images: [""], //'/Images/bedroom2.jpg' /*['/Images/bedroom1.jpg', '/Images/bedroom2.jpg', '/Images/bedroom3.jpg']*/
    slug: "yatak-odası-tasarımlarımız",
  },
  {
    name: "Gardırop Tasarımlarımız",
    images: [""], //'/Images/gardırop1.jpg',
    slug: "gardırop-tasarımlarımız",
  },
  {
    name: "Portmanto Tasarımlarımız",
    images: [""], //'/Images/drawr1.jpg',
    slug: "portmanto-tasarımlarımız",
  },
  {
    name: "Banyo Tasarımlarımız",
    images: [""],
    slug: "banyo-tasarımlarımız",
  },
  {
    name: "Banyo Tasarımlarımız",
    images: [""],
    slug: "banyo-tasarımlarımız",
  },
];

const container = {
  visible: {
    transition: {
      // delayChildren: .2,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    translateY: 20,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};

export default function Page() {
  useEffect(() => {
    // Burada fotoğrafların yüklendiğini simüle ediyoruz.
    // Gerçek uygulamada decodedImages array'i gibi bir veri kaynağından
    // fotoğrafların yüklendiğinden emin olmalısınız.
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // İstenilen yükleme süresi (ms) olarak değiştirilebilir.
  }, []);

  const router = useRouter();
  const slug = router.query.slug;

  const decodedImages = products.find((product) => product.slug === slug)?.images ?? [];
  const decodedName = products.find((product) => product.slug === slug)?.name;

  const [selectedImage, setSelectedImage] = useState(0);
  const swiperRef = useRef(null);
  const [selectedExp, setSelectedExp] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    // Burada fotoğrafların yüklendiğini simüle ediyoruz.
    // Gerçek uygulamada decodedImages array'i gibi bir veri kaynağından
    // fotoğrafların yüklendiğinden emin olmalısınız.
    setTimeout(() => {
      setIsLoading(false);
    
    }, 2000); // İstenilen yükleme süresi (ms) olarak değiştirilebilir.
  }, []);
  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
    swiperRef.current.swiper.slideTo(index); // Swiper'ı tıklanan fotoğrafa getir
  };

  const handleExpClick = (boolean) => {
    setSelectedExp(boolean);
  };

  

  return (
    <div lang="tr">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mobilya dekorasyonu, iç mimarlık ve tasarım hizmetleri sunan profesyonel firma. İç mekanlarınızı yeniden tasarlıyoruz."
        />
        <meta
          name="keywords"
          content="mobilya,
                    dekorasyon,
                    iç mimarlık,
                    tasarım,
                    iç mekan tasarımı,
                    mobilya tasarımı,
                    ev dekorasyonu,
                    çocuk ve genç odası,tasarımları,
                    gardırop tasarımları,
                    portmanto tasarımları,
                    banyo tasarımları,
                    yatak odası tasarımları,
                    yemek masası tasarımları,
                    mutfak tasarımları,
                    mobilya montaj,
                    mimari proje çizimi,
                    tadilat dekorasyon
                    "
        />
        <title>Ürün Detay</title>
      </Head>

      <motion.div initial="hidden" animate="visible" variants={container}>
        {
          <>
            <SocialMedia />
            <BackToTopButton />
            <Navbar />
            <div className="globalContainer">
              <div className="headerAndSlugContainer">
                <div className="headerSlug">{decodedName}</div>
                <div className="smallAndBigImageContainer">
                  {decodedImages !== null ? (
                    <div className="scrollDiv">
                      <div className="smallImageContainer">
                        {decodedImages.map((image, index) => (
                          <motion.div
                            variants={item}
                            key={index}
                            className={`smallImages ${
                              selectedImage === index ? "selected" : ""
                            }`}
                            onClick={() => handleImageClick(index)}
                          >
                            <Image
                              // fill
                              // sizes='100vw'
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{
                                width: "100%",
                                height: "90px",
                                objectFit: "cover",
                              }}
                              alt="Picture of the smallSlug"
                              src={image}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div>Fotoğraf Bekleniyor..</div>
                  )}
                  <Swiper
                  ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={20}
                    keyboard={{
                      enabled: true,
                    }}
                    modules={[Pagination, Keyboard, Parallax]}
                    onSlideChange={(swiper) => {
                      setSelectedImage(swiper.activeIndex);
                    }}
                    className="bigImageContainer"
                  >
                    {decodedImages !== null &&
                      decodedImages.map((image, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain",
                             
                            }}
                            alt="Picture of the bigSlug"
                          />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="explanation">
              <div className="explanation-header">
                <div
                  onClick={() => handleExpClick(true)}
                  className={selectedExp ? "selected" : ""}
                >
                  Açıklama
                </div>
                <div
                  onClick={() => handleExpClick(false)}
                  className={!selectedExp ? "selected" : ""}
                >
                  Sipariş Ver
                </div>
              </div>
              {selectedExp ? (
                <div className="explanation-content">
                  <p>
                    Tüm ürünlerimiz size özel olarak, sipariş üzerine
                    üretilmektedir.
                  </p>
                  <p>
                    Ürünlerimiz kesinlikle demonte ve hazır kalıp ürünler
                    değildir.
                  </p>
                  <p>
                    Dilediğiniz ölçüde, renkte ve özellikte istediğiniz modeli
                    üretebiliriz.
                  </p>
                  <p>
                    İstanbul içi ücretsiz nakliye ve kurulum hizmetimiz
                    mevcuttur.
                  </p>
                  <p>
                    Detaylı bilgi için{" "}
                    <Link className="link" href="/contact">
                      İletişim sayfamızdan
                    </Link>{" "}
                    bizimle iletişime geçebileceğiniz gibi buraya tıklayarak
                    WhatsApp üzerinden de iletişim kurabilirsiniz.
                  </p>
                </div>
              ) : (
                <div className="order-content">
                  {/* Sipariş içeriği buraya gelecek */}
                  <Form />
                </div>
              )}
            </div>
            <Footer />
          </>
        }
      </motion.div>
    </div>
  );
}
