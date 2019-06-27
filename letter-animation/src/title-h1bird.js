import React from 'react';

const TitleH1bird = React.forwardRef((props, ref) => {
        let wordArr = props.txtReg.split(' ');
        let boldwordArr = props.txtBold.split(' ');
        let regularWords = wordArr.map((i, index)=>{
            let x = i.split('');
            return (<span key={`${index}word`} className={`${index}r word word--regular`}>{x.map((it, ind) =>{
               return <span key={`${ind}l`}>
                        <span className="bird2"></span>
                        <span className="main-title--regular">{it}</span>
                        <span className="bird"></span>
                      </span>
            })}&nbsp;</span>); 
        });
        let boldWords = boldwordArr.map((i, index)=>{
            let x = i.split('');
            return (<span key={`${index}word`} className={`${index}b word word--bold`}>{x.map((it, ind) =>{
               return <span key={`${ind}l`}>
                        <span className="bird2b"></span>
                        <span className="main-title--bold">{it}</span>
                        <span className="bird"></span>
                      </span>
            })}&nbsp;</span>); 
        });
    return (
        <h1 ref={ref} className={props.theclass}>{boldWords}<br />{regularWords}</h1>
        ); });
export default TitleH1bird;