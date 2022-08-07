import Helmet from 'Client/components/Helmet';
import HeroSlider from 'Client/components/Hero/HeroSlider';
import NewsCard from 'Client/components/News/NewCard';
import PolicyCart from 'Client/components/Policy/PolicyCart';
import ProductCard from 'Client/components/Products/ProductCard';
import Section from 'Client/components/Sections/Section';
import SectionBody from 'Client/components/Sections/SectionBody';
import SectionTitle from 'Client/components/Sections/SectionTitle';
import Slider from 'Client/components/Slider';
import { Link } from 'react-router-dom';
import heroSliderData from 'shared/assets/fake-data/hero-slider';
import policy from 'shared/assets/fake-data/policy';
import productData from 'shared/assets/fake-data/products';
import { sale } from 'shared/assets/images';
import Grid from 'shared/grid/Components/Grid';
import GridAreas from 'shared/grid/Components/GridAreas';

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
        <SectionTitle btnContent="Xem tất cả" slug="/catalog" title="Sản phẩm hot 2023" />
        <Slider />
      </Section>
      {/*End Slider section */}

      {/*best selling section */}
      <Section>
        <SectionTitle btnContent="Xem tất cả" slug="/catalog" title="Top sản phẩm bán chạy " />
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
        <SectionTitle btnContent="Xem tất cả" slug="/catalog" title="Lễ Hội Siêu Sale" />
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
        <SectionTitle btnContent="Xem tất cả" slug="/catalog" title="Gía siêu HOT" />
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

      {/* news fashion section */}
      <Section>
        <SectionTitle btnContent="Xem tất cả" slug="/news" title="GÓC TIN TỨC" />
        <SectionBody>
          <Grid col={4} mdCol={3} smCol={2} gap={10}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </Grid>
        </SectionBody>
      </Section>
      {/*end news fashion section */}
    </Helmet>
  );
};

export default Home;
