import React from 'react';

const TitleH2 = (props) => {
    return (
        <h2 className='title-h2'>{props.txtBold}<br />
            {props.hasBird ? <span className="bird"></span> : null}
            <span className='title-h2 title--regular'>{props.txtReg}</span>
        </h2>
    );
}; 
export default TitleH2;