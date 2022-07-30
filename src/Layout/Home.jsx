import heroSliderData from 'shared/assets/fake-data/hero-slider';
import policy from 'shared/assets/fake-data/policy';
import productData from 'shared/assets/fake-data/products';
import Grid from 'shared/GirdTemplate/Components/Grid';
import Helmet from 'components/Helmet';
import HeroSlider from 'components/Hero/HeroSlider';
import PolicyCart from 'components/Policy/PolicyCart';
import ProductCard from 'components/Products/ProductCard';
import Section from 'components/Sections/Section';
import SectionBody from 'components/Sections/SectionBody';
import SectionTitle from 'components/Sections/SectionTitle';
import banner from 'shared/assets/images/banner.png';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'components/Slider';
import GridAreas from 'shared/GirdTemplate/Components/GridAreas';
import { sale } from 'shared/assets/images';

const Home = () => {
  return (
    <Helmet title="trang chủ">
      {/* hero side */}
      <HeroSlider data={heroSliderData} control={true} auto={false} timeOut={5000} />
      {/*end hero side */}

      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="/policy" key={index}>
                <PolicyCart name={item.name} description={item.description} icon={item.icon} />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/*end policy section */}

      {/* Slider section */}
      <Section>
        <SectionTitle title="Sản phẩm hot 2023" />
        <Slider />
      </Section>
      {/*End Slider section */}

      {/*best selling section */}
      <Section>
        <SectionTitle title="Top sản phẩm bán chạy "></SectionTitle>
        <SectionBody>
          <GridAreas>
            <div className="grid-areas__banner" style={{ backgroundColor: 'red' }}></div>
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
                  percentDiscount={item.percentDiscount}
                />
              </div>
            ))}
          </GridAreas>
        </SectionBody>
      </Section>
      {/*end best selling section */}

      {/*new arrival section */}
      <Section>
        <SectionTitle title="Lễ Hội Siêu Sale"></SectionTitle>
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
                  percentDiscount={item.percentDiscount}
                />
              </div>
            ))}
          </GridAreas>
        </SectionBody>
      </Section>
      {/*end new arrival section */}

      {/* banner */}
      {/* <Section>
        <SectionBody>
          <Link to="/catalog">
            <img className="banner-big" src={banner} alt="" width="100%" />
          </Link>
        </SectionBody>
      </Section> */}
      {/*end banner */}

      {/*popular product section */}
      <Section>
        <SectionTitle title="Gía siêu HOT"></SectionTitle>
        <SectionBody>
          <div className="product-hot">
            <Grid col={5} mdCol={2} smCol={1}>
              {productData.getProducts(10).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image01}
                  img02={item.image02}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                  sale={item.sale}
                  productNew={item.productNew}
                  percentDiscount={item.percentDiscount}
                />
              ))}
            </Grid>
          </div>
        </SectionBody>
      </Section>
      {/*end popular product section */}
    </Helmet>
  );
};

export default Home;
