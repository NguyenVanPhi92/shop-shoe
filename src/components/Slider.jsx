import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import productData from 'shared/assets/fake-data/products';
import { Autoplay, Pagination } from 'swiper';
import ProductCard from './Products/ProductCard';

const Slider = () => {
  const relatedProducts = productData.getProducts(12);
  console.log('hih ', relatedProducts[1].sale);
  return (
    <>
      <Swiper
        slidesPerView={1}
        // spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'fraction',
          clickable: true,
        }}
        breakpoints={{
          380: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {relatedProducts.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard
              key={index}
              img01={item.image01}
              img02={item.image02}
              name={item.title}
              price={Number(item.price)}
              slug={item.slug}
              sale={item.sale}
              percentDiscount={item.percentDiscount}
              productNew={item.productNew}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
