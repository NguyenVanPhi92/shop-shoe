import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import Grid from 'shared/grid/components/Grid'
import ProductCard from 'view/pages/product/components/ProductCard'

// render list product
const InfinityList = props => {
    const listRef = useRef(null)
    const perLoad = 6 // items each load
    const [data, setData] = useState(props.data.slice(0, perLoad)) // lấy ra 6 item hiển thị
    const [load, setLoad] = useState(true)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setData(props.data.slice(0, perLoad))
        setIndex(1)
    }, [props.data])

    // nhận sự kiện load more window
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (listRef && listRef.current) {
                if (
                    window.scrollY + window.innerHeight >=
                    listRef.current.clientHeight + listRef.current.offsetTop + 200
                ) {
                    console.log('load')
                    setLoad(true)
                }
            }
        })
    }, [listRef])

    // load more item product
    useEffect(() => {
        const getItem = () => {
            const pages = Math.floor(props.data.length / perLoad)
            const maxIndex = props.data.length % perLoad === 0 ? pages : pages + 1

            if (load && index <= maxIndex) {
                const start = perLoad * index
                const end = start + perLoad

                setData(data.concat(props.data.slice(start, end)))
                setIndex(index + 1)
            }
        }

        getItem()
        setLoad(false)
    }, [load, data, index, props.data])

    return (
        <div ref={listRef}>
            <Grid col={4} mdCol={3} smCol={1} gap={20}>
                {data.map((item, index) => (
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
                ))}
            </Grid>
        </div>
    )
}

InfinityList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default InfinityList
