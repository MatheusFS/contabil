import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './styles.css';

function FloatActionButton(){

    return (
        <button className="fa-btn">
            <FontAwesomeIcon icon={faPlus} />
        </button>
    )
}

export default FloatActionButton;