import heroSliderData from 'assets/fake-data/hero-slider';
import policy from 'assets/fake-data/policy';
import productData from 'assets/fake-data/products';
import Grid from 'components/Grid';
import Helmet from 'components/Helmet';
import HeroSlider from 'components/Hero/HeroSlider';
import PolicyCart from 'components/Policy/PolicyCart';
import ProductCard from 'components/Products/ProductCard';
import Section from 'components/Sections/Section';
import SectionBody from 'components/Sections/SectionBody';
import SectionTitle from 'components/Sections/SectionTitle';
import banner from 'assets/images/banner.png';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'components/Slider';

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
        <SectionTitle title="Top sản phẩm bán chạy trong tuần"></SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                salePrice={item.salePrice}
                percentDiscount={item.percentDiscount}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/*end best selling section */}

      {/*new arrival section */}
      <Section>
        <SectionTitle title="Best 2022"></SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                salePrice={item.salePrice}
                percentDiscount={item.percentDiscount}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/*end new arrival section */}

      {/* banner */}
      <Section>
        <SectionBody>
          <Link to="catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/*end banner */}

      {/*popular product section */}
      <Section>
        <SectionTitle title="Sản phẩm mới"></SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                salePrice={item.salePrice}
                percentDiscount={item.percentDiscount}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/*end popular product section */}
    </Helmet>
  );
};

export default Home;
