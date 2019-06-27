import React from 'react';

const TitleH2spans = React.forwardRef((props, ref) => {
    let wordArr = props.txtReg.split(' ');
    let boldwordArr = props.txtBold.split(' ');

    let regularWords = wordArr.map((i, index)=>{
        let x = i.split('');
        return (
            <span key={`${index}word`} className={`${index}r word word--regular`}>{x.map((it, ind) =>{
                return <span className="title-h2 title--regular" key={ind.toString()}>{it}</span>  
            })}&nbsp;</span>);
    })

    let boldWords = boldwordArr.map((i, index)=>{
        let x = i.split('');
        return (<span key={`${index}word`} className={`${index}b word word--bold`}>{x.map((it, ind) =>{
            return <span className='title-h2' key={ind.toString()}>{it}</span> 
        })}&nbsp;</span>); 
    })

    return (
        <h2 ref={ref} className={props.theclass}>{boldWords}
            {props.hasBird ? <span className="bird"></span> : null}
            {props.hasBird ? <span className="bird2"></span> : null} 
            <br />{regularWords}
        </h2>
        ); 
    });
export default TitleH2spans;