import React from 'react';
// import PropTypes from 'prop-types';

const NewsCard = (props) => {
    const isNews = true;
    return (
        <div className="news-card">
            <img
                src="https://bizweb.dktcdn.net/100/405/012/files/01-index-shoe-09.jpg?v=1603985321397"
                alt=""
                className="news-card__image"
            />
            {isNews && <div className="news-card__new">new</div>}
            <div className="new-card__title">
                <h4>Văn hóa streetwear mở ra kỷ nguyên mới cho ngành thời trang?</h4>
            </div>
            <div className="new-card__content">
                Streetwear không còn là nền văn hoá, nó đã trở thành kỷ nguyên mới dành cho thế hệ
                yêu thời trang của thế kỷ 21. S...
            </div>
        </div>
    );
};

// NewsCard.propTypes = {
//   img: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   content: PropTypes.number.isRequired,
// };

export default NewsCard;
