import productData from 'shared/assets/fake-data/products';
import Grid from 'shared/grid/components/Grid';
import Helmet from 'container/components/Helmet';
import ProductCard from 'container/components/Products/ProductCard';
import ProductView from 'container/components/Products/ProductView';
import Section from 'container/components/Sections/Section';
import SectionBody from 'container/components/Sections/SectionBody';
import SectionTitle from 'container/components/Sections/SectionTitle';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Product = (props) => {
    const { id } = useParams();
    const location = useLocation();
    const product = productData.getProductBySlug(id);
    const relatedProducts = productData.getProducts(4);

    // scroll top when clicking action between pages
    useEffect(() => {
        window.scrollTo(0, 0, 'smooth');
    }, [location]);

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
                                productNew={item.productNew}
                                percentDiscount={item.percentDiscount}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default Product;
