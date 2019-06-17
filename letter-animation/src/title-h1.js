import React from 'react';

const TitleH1 = React.forwardRef((props, ref) => {
        let newArr = props.txtReg.split('');
        let newArr2 = props.txtBold.split('');
        
        
    return (
        <h1 ref={ref} className={props.theclass}>{newArr2.map((item, index)=>(item !== ' ') ? <span className='main-title--bold' key={index.toString()}>{item}</span> : <span className='main-title--bold' key={index.toString()}>&nbsp;</span>)}<br />{newArr.map((item, index)=> (item !== ' ') ? <span className='main-title--regular' key={index.toString()}>{item}</span> : <span className='main-title--regular' key={index.toString()}>&nbsp;</span>)}</h1>
    );
}); 
export default TitleH1;