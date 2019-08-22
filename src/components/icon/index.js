import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => (
    <svg
        className={ props.className }
        viewBox={ props.viewBox }
        width={ props.width }
        height={ props.height }
        fill={ props.fill }>
        <use href={ `#${props.icon.id}` } />
    </svg>
);

Icon.propTypes = {
    viewBox: PropTypes.string,
    id: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fill: PropTypes.string,
};

export default Icon;
