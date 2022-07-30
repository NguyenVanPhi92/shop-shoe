import productData from 'shared/assets/fake-data/products';
import Grid from 'shared/GirdTemplate/Components/Grid';
import Helmet from 'components/Helmet';
import ProductCard from 'components/Products/ProductCard';
import ProductView from 'components/Products/ProductView';
import Section from 'components/Sections/Section';
import SectionBody from 'components/Sections/SectionBody';
import SectionTitle from 'components/Sections/SectionTitle';
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = (props) => {
  const { id } = useParams();
  const product = productData.getProductBySlug(id);
  const relatedProducts = productData.getProducts(4);

  // useEffect(() => {
  //   window.screenTop(0, 0);
  // }, []);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle title="Khám phá thêm"></SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
                sale={item.sale}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;