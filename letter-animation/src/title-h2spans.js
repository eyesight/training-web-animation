import React from 'react';

const TitleH2spans = React.forwardRef((props, ref) => {
    let newArr2 = props.txtReg.split('');
    let newArr = props.txtBold.split('');
    return (
        <h2 ref={ref} className={props.theclass}>{newArr.map((item, index)=> (item !== ' ') ? <span key={index.toString()}>{item}</span> : <span key={index.toString()}>&nbsp;</span>)}<br />{newArr2.map((item, index)=>(item !== ' ') ? <span className='title-h2 title--regular' key={index.toString()}>{item}</span> : <span className='title-h2 title--regular' key={index.toString()}>&nbsp;</span>)}</h2>
    );
}); 
export default TitleH2spans;