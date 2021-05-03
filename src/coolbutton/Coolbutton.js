import 'bulma/css/bulma.css';
import React from 'react';
import './CoolButton.css'

const CoolButton = (props) =>{
    return (
        <div>            
            <button  className={`button ${props.className} ${props.isDanger && 'is-danger'} ${props.isSmall && 'is-small'} ${props.isSuccess && 'is-success'} ${props.isLight && 'is-light'} ${props.isPrimary && 'is-primary'}`}>{props.children}</button>
        </div>
    )
}

export default CoolButton