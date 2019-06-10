import React from 'react';

const TitleH1 = React.forwardRef((props, ref) => {
    return (
        <h1 ref={ref} className={props.theclass}>{props.txtBold}<br /><span className='main-title--bold'>{props.txtReg}</span></h1>
    );
}); 
export default TitleH1;