import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import category from 'shared/assets/fake-data/category'
import colors from 'shared/assets/fake-data/product-color'
import price from 'shared/assets/fake-data/product-price'
import size from 'shared/assets/fake-data/product-size'
import productData from 'shared/assets/fake-data/products'
import BreakCrumb from 'shared/components/BreakCrumb'
import Button from 'shared/components/Form/Button/Button'
import CheckBox from 'shared/components/Form/Checkbox/CheckBox'
import Helmet from 'shared/components/Helmet'
import InfinityList from 'shared/components/InfinityList'

const Catalog = () => {
    const intiFilter = {
        category: [],
        color: [],
        size: [],
    }

    const location = useLocation()
    const productList = productData.getAllProducts()
    const [products, setProducts] = useState(productList)
    const [filter, setFilter] = useState(intiFilter)
    const filterRef = useRef(null)

    //handel
    const showHideFilter = () => filterRef.current.classList.toggle('active')
    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case 'CATEGORY':
                    setFilter({ ...filter, category: [...filter.category, item.categorySlug] })
                    break
                case 'COLOR':
                    setFilter({ ...filter, color: [...filter.color, item.color] })
                    break
                case 'SIZE':
                    setFilter({ ...filter, size: [...filter.size, item.size] })
                    break
                default:
            }
        } else {
            switch (type) {
                case 'CATEGORY':
                    const newCategory = filter.category.filter(e => e !== item.categorySlug)
                    setFilter({ ...filter, category: newCategory })
                    break
                case 'COLOR':
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({ ...filter, color: newColor })
                    break
                case 'SIZE':
                    const newSize = filter.size.filter(e => e !== item.size)
                    setFilter({ ...filter, size: newSize })
                    break
                default:
            }
        }
    }

    // tìm kiếm product
    const productFilter = useCallback(() => {
        let temp = productList
        if (filter.category.length > 0) {
            temp = temp.filter(e => filter.category.includes(e.categorySlug))
        }

        if (filter.color.length > 0) {
            temp = temp.filter(e => {
                const check = e.colors.find(color => filter.color.includes(color))
                return check !== undefined
            })
        }

        if (filter.size.length > 0) {
            temp = temp.filter(e => {
                const check = e.size.find(size => filter.size.includes(size))
                return check !== undefined
            })
        }

        setProducts(temp)
    }, [filter.category, filter.color, filter.size, productList])

    // update lại product khi filter
    useEffect(() => {
        productFilter()
    }, [productFilter])

    // scroll top when clicking action between pages
    useEffect(() => {
        window.scrollTo(0, 0, 'smooth')
    }, [location])

    // xóa all tìm kiếm
    const clearFilter = () => setFilter(intiFilter)

    return (
        <Helmet title="Sản Phẩm">
            <BreakCrumb path="catalog" />

            <div className="catalog">
                <div className="catalog__filter" ref={filterRef}>
                    <div className="catalog__filter__lose" onClick={showHideFilter}>
                        <i className="bx bx-left-arrow-alt"></i>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">Danh mục sản phẩm</div>
                        <div className="catalog__filter__widget__content">
                            {category.map((item, index) => (
                                <div key={index} className="catalog__filter__widget__content__item">
                                    <CheckBox
                                        label={item.display}
                                        onChange={input => filterSelect('CATEGORY', input.checked, item)}
                                        checked={filter.category.includes(item.categorySlug)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">Màu sắc</div>
                        <div className="catalog__filter__widget__content">
                            {colors.map((item, index) => (
                                <div key={index} className="catalog__filter__widget__content__item">
                                    <CheckBox
                                        label={item.display}
                                        onChange={input => filterSelect('COLOR', input.checked, item)}
                                        checked={filter.color.includes(item.color)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">Kích cở</div>
                        <div className="catalog__filter__widget__content">
                            {size.map((item, index) => (
                                <div key={index} className="catalog__filter__widget__content__item">
                                    <CheckBox
                                        label={item.display}
                                        onChange={input => filterSelect('SIZE', input.checked, item)}
                                        checked={filter.size.includes(item.size)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__title">Mức giá</div>
                        <div className="catalog__filter__widget__content">
                            {price.map((item, index) => (
                                <div key={index} className="catalog__filter__widget__content__item">
                                    <CheckBox
                                        label={item.priceFrom}
                                        // onChange={(input) => filterSelect('SIZE', input.checked, item)}
                                        // checked={filter.size.includes(item.size)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="catalog__filter__widget">
                        <div className="catalog__filter__widget__content">
                            <Button size="sm" onClick={clearFilter}>
                                xóa bộ lọc
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="catalog__filter__toggle">
                    <Button size="sm" onClick={showHideFilter}>
                        bộ lọc
                    </Button>
                </div>

                {/* List các sản phầm sau khi filter */}
                <div className="catalog__content">
                    <InfinityList data={products} />
                </div>
            </div>
        </Helmet>
    )
}

export default Catalog
