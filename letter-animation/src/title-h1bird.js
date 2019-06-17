import React from 'react';

const TitleH1bird = React.forwardRef((props, ref) => {
        let newArr = props.txtReg.split('');
        let newArr2 = props.txtBold.split('');
        
        
    return (
        <h1 ref={ref} className={props.theclass}>{newArr2.map((item, index)=>(item !== ' ') ? <span key={index.toString()}><span className='main-title--bold'>{item}</span><span className="bird"></span></span> : <span key={index.toString()}><span className='main-title--bold'>&nbsp;</span><span className="bird"></span></span>)}<br />{newArr.map((item, index)=> (item !== ' ') ? <span key={index.toString()}><span className='main-title--regular'>{item}</span><span className="bird"></span></span> : <span key={index.toString()}><span className='main-title--regular'>&nbsp;</span><span className="bird"></span></span>)}</h1>
    );
}); 
export default TitleH1bird;