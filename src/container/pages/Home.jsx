import Helmet from 'container/components/Helmet';
import HeroSlider from 'container/components/Hero/HeroSlider';
import NewsCard from 'container/components/News/NewCard';
import PolicyCart from 'container/components/Policy/PolicyCart';
import ProductCard from 'container/components/Products/ProductCard';
import Section from 'container/components/Sections/Section';
import SectionBody from 'container/components/Sections/SectionBody';
import SectionTitle from 'container/components/Sections/SectionTitle';
import Slider from 'container/components/Slider';
import { Link, Outlet } from 'react-router-dom';
import heroSliderData from 'shared/assets/fake-data/hero-slider';
import policy from 'shared/assets/fake-data/policy';
import productData from 'shared/assets/fake-data/products';
import { banner_home, sale } from 'shared/assets/images';
import Grid from 'shared/grid/components/Grid';
import GridAreas from 'shared/grid/components/GridAreas';

const Home = () => {
    return (
        <Helmet title="trang chủ">
            {/* banner */}
            <Section>
                <img src={banner_home} alt="" height="100%" />
            </Section>
            {/* banner */}

            {/*-- SLIDER SẢN PHẨM HOT NHẤT  */}
            <Section>
                <SectionTitle
                    btnContent="Xem tất cả"
                    slug="/catalog"
                    menu
                    title="SẢN PHẨM HOT 2023"
                />
                <Slider />
            </Section>
            {/*END*/}

            {/* -- SẢN PHẨM GIẢM GIÁ */}
            <Section>
                <SectionTitle
                    menu
                    title="TOP SẢN PHẨM BÁN CHẠY"
                    btnContent="Xem tất cả"
                    slug="/catalog"
                />
                <SectionBody>
                    <GridAreas>
                        <div className="grid-areas__banner">
                            <img className="grid-areas__banner__image" src={sale} alt="" />
                        </div>
                        {productData.getProducts(10).map((item, index) => (
                            <div className={`grid-areas__product${index + 1} products`} key={index}>
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    sale={item.sale}
                                    productHot={item.productHot}
                                    productNew={item.productNew}
                                    percentDiscount={item.percentDiscount}
                                />
                            </div>
                        ))}
                    </GridAreas>
                </SectionBody>
            </Section>
            {/*END  */}

            {/*-- SẢN PHẨM CÓ KHUYẾN MÃI*/}
            <Section>
                <SectionTitle menu title="KHUYẾN MÃI" btnContent="Xem tất cả" slug="/catalog" />
                <SectionBody>
                    <GridAreas>
                        <div className="grid-areas__banner">
                            <img className="grid-areas__banner__image" src={sale} alt="" />
                        </div>
                        {productData.getProducts(10).map((item, index) => (
                            <div className={`grid-areas__product${index + 1} products`} key={index}>
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    sale={item.sale}
                                    productNew={item.productNew}
                                    productHot={item.productHot}
                                    percentDiscount={item.percentDiscount}
                                />
                            </div>
                        ))}
                    </GridAreas>
                </SectionBody>
            </Section>
            {/*END */}

            {/*  -- PHỤ KIỆN HOT*/}
            <Section>
                <SectionTitle menu title="PHỤ KIỆN HOT" btnContent="Xem tất cả" slug="/catalog" />
                <SectionBody>
                    <div className="product-hot">
                        <Grid col={5} mdCol={2} smCol={1} gap="20">
                            {productData.getProducts(10).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    slug={item.slug}
                                    sale={item.sale}
                                    productHot={item.productHot}
                                    productNew={item.productNew}
                                    percentDiscount={item.percentDiscount}
                                />
                            ))}
                        </Grid>
                    </div>
                </SectionBody>
            </Section>
            {/*END  */}

            {/* -- TIN TỨC HOT*/}
            <Section>
                <SectionTitle title="GÓC TIN TỨC" btnContent="Xem tất cả" slug="/news" />
                <SectionBody>
                    <Grid col={4} mdCol={3} smCol={2} gap={10}>
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </Grid>
                </SectionBody>
            </Section>
            {/*END */}

            <Outlet />
        </Helmet>
    );
};

export default Home;
