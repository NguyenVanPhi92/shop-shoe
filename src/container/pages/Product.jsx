import Helmet from 'container/components/Helmet';
import ProductCard from 'container/components/Products/ProductCard';
import ProductView from 'container/components/Products/ProductView';
import Section from 'container/components/Sections/Section';
import SectionBody from 'container/components/Sections/SectionBody';
import SectionTitle from 'container/components/Sections/SectionTitle';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import productData from 'shared/assets/fake-data/products';
import {
    imageBrand1,
    imageBrand2,
    imageBrand3,
    imageBrand4,
    imageBrand5,
    imageBrand6,
} from 'shared/assets/images/brand';
import Grid from 'shared/grid/components/Grid';

const Product = (props) => {
    const { id } = useParams();
    const location = useLocation();
    const product = productData.getProductBySlug(id);
    const relatedProducts = productData.getProducts(6);

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

            {/* Sản Phẩm Khám Phá Thêm */}
            <Section>
                <SectionTitle title="Khám phá thêm" />
                <SectionBody>
                    <Grid col={6} mdCol={4} smCol={1} gap={20}>
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

            {/* Sản phẩm vừa xem */}
            <Section>
                <SectionTitle title="Sản Phẩm Vừa Xem" />
                <SectionBody>
                    <Grid col={6} mdCol={4} smCol={1} gap={20}>
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

            {/* Brand Logo*/}
            <div style={{ marginTop: '80px' }} className="brandLogos">
                <Section>
                    <Grid col={6} mdCol={4} gap={35}>
                        <img src={imageBrand1} alt="" />
                        <img src={imageBrand2} alt="" />
                        <img src={imageBrand3} alt="" />
                        <img src={imageBrand4} alt="" />
                        <img src={imageBrand5} alt="" />
                        <img src={imageBrand6} alt="" />
                    </Grid>
                </Section>
            </div>
        </Helmet>
    );
};

export default Product;
