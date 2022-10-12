import { Swiper, SwiperSlide } from 'swiper/react'
import productData from 'shared/assets/fake-data/products'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ProductCard from 'view/pages/product/components/ProductCard'

const Slider = () => {
    const relatedProducts = productData.getProducts(12)
    return (
        <>
            <Swiper
                slidesPerView={1}
                // spaceBetween={10}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction',
                    clickable: true,
                }}
                breakpoints={{
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
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
                            productHot={item.productHot}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Slider
