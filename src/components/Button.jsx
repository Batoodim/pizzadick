import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({onClick, className, outline, children})=> {

    return (
        <button
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
      })}>
            {children}
        </button>
    )
}

Button.propTypes = {
    oncClick: PropTypes.func,
}

export default Button;

