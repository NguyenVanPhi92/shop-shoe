import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, updateItem } from 'redux/shopping-cart/cartItemsSlice'
import { formatPrice } from 'utils/formatPrice'

const CartItems = props => {
    const dispatch = useDispatch()
    const [item, setItem] = useState(props.item)
    const [quantity, setQuantity] = useState(props.item.quantity)

    useEffect(() => {
        setItem(props.item)
        setQuantity(props.item.quantity)
    }, [props.item])

    //handle
    const updateQuantity = opt => {
        if (opt === '+') {
            dispatch(updateItem({ ...item, quantity: quantity + 1 < 100 ? quantity + 1 : 99 }))
        }

        if (opt === '-') {
            dispatch(updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 }))
        }
    }

    const removeCartItem = () => {
        dispatch(removeItem(item))
    }

    return (
        <div className="cart__item">
            <div className="cart__item__image">
                <img src={item.product.image01} alt="" />
            </div>

            <div className="cart__item__info">
                <div className="cart__item__info__name">
                    <Link to={`/catalog/${item.slug}`}>{`${item.product.title} - ${item.color} - ${item.size}`}</Link>
                </div>

                <div className="cart__item__info__price">{formatPrice(Number(item.product.price))}</div>

                <div className="cart__item__info__quantity">
                    <div className="product__info__item__quantity">
                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('-')}>
                            <i className="bx bx-minus"></i>
                        </div>

                        <div className="product__info__item__quantity__input">{quantity}</div>

                        <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('+')}>
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>

                <div className="cart__item__info__del" onClick={removeCartItem}>
                    <i className="bx bx-trash"></i>
                </div>
            </div>
        </div>
    )
}

CartItems.propTypes = {
    item: PropTypes.object,
}

export default CartItems
