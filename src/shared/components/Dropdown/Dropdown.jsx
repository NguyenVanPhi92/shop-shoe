import PropTypes from 'prop-types'
import { useState } from 'react'

const Dropdown = props => {
    const [active, setActive] = useState(false)
    return (
        <div className={`accordion ${active ? 'active' : ''}`}>
            <div className="accordion__title" onClick={() => setActive(!active)}>
                <p>{props.title}</p>
                <div className="accordion__icon">
                    <i className="bx bxs-chevron-down"></i>
                </div>
            </div>
            <div className="accordion__content">{props.content}</div>
        </div>
    )
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Dropdown
