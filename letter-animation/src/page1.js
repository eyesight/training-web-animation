import React, { Component } from 'react';
import TitleH1 from './title-h1'; 
import TitleH2spans from './title-h2spans';
import Paragraph from './paragraph';
import { Transition } from "react-transition-group";
import { TweenMax, TimelineMax } from "gsap/all";
import OnVisible, { setDefaultProps } from 'react-on-visible';

const startState = { autoAlpha: 1, y: -500, position: "absolute" };

setDefaultProps({
    bounce: true,
    visibleClassName: 'appear',
    percent: 80,
    wrappingElement: 'span'
});


class Page1 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            width: 0, 
            height: 0,
            actualElement: ''
          };
        this.myRef = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {   
        document.addEventListener('scroll', this.handleScroll);     
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() { 
        window.removeEventListener('scroll', this.handleScroll); 
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
   
    componentDidUpdate() {
    }
    componentWillUpdate() {
        
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    updateVis(e) {
        console.log(e);
    }
    
    handleScroll = (e) => {
        let allElements = [this.myRef.current, this.myRef2.current, this.myRef3.current];
        if(allElements.length > 0){
            allElements.forEach((elem)=>{
                console.log(elem);
            const scrollTop = elem.getBoundingClientRect().top;
            const scrollBottom = elem.getBoundingClientRect().bottom;
            const scrollHeight = elem.getBoundingClientRect().height;
            const elPercent = (this.state.height/100*20);
            const tl = new TimelineMax();
            tl.add("stagger")
            let allLetters = elem.querySelectorAll('span');
                let all1 = [];
                let all2 = [];
                let all3 = [];
                allLetters.forEach(function(item, i){
                    if(i%3 === 0){
                        all3.push(item);
                    }else if(i%2 === 0){
                        all2.push(item)
                    }else{
                        all1.push(item);
                    }
                });
            if (scrollTop + scrollHeight > 0 && scrollBottom > 0 && scrollTop < elPercent) {
              elem.classList.remove('isAnimationgOnHover');
             let float = scrollTop-131;
             tl.to(all1, 0.5, {transform: 'translateY('+ float +'px)'}, "stagger");
             tl.to(all2, 1.5, {transform: 'translateY('+ float +'px)'}, "stagger");
             tl.to(all3, 1, {transform: 'translateY('+ float +'px)'}, "stagger");
            }else{
                TweenMax.to(all1, 0.5, {transform: 'translateY(0px)'});
                TweenMax.to(all2, 1.5, {transform: 'translateY(0px)'});
                TweenMax.to(all3, 1, {transform: 'translateY(0px)'});
                elem.classList.add('isAnimationgOnHover');
            }
            });
        }
    }

    render() {
        const { show } = this.props;
        return ( 
            <Transition
                    appear
                    unmountOnExit
                    in={show}
                    timeout={{
                        appear: 5000,
                        enter: 0,
                        exit: 5000,
                        }}
                    onEnter={node => {
                        console.log('onEnter');
                        TweenMax.set(node, startState)}}
                    onEntering={(node)=>{
                        console.log('onEntering');
                    }}
                    addEndListener={ (node, done) => {
                        TweenMax.to(node, 1, {
                            autoAlpha: show ? 1 : 0,
                            y: show ? 0 : -500,
                            position: show ? "relative" : "absolute",
                            onComplete: done
                        });
                    }}
                    onExit={(node)=>{
                        console.log('onExited');
                    }}
                >
            <div className="content content-page1" >
                    <section className='section-1' >
                        <TitleH1
                            ref={this.myRef}
                            txtBold='Title H1'
                            txtReg='asdfasdf Lorem ipsum'
                            theclass={`main-title`}
                        />
                        <Paragraph
                            txt='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                        />
                        <Paragraph
                            txt='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                        />
                    </section>
                    <section className='section-1'>
                        <OnVisible onChange={this.updateVis.bind(this)} className="title-h2-wrapper">
                        <div className="title-h2-wrapper">
                            <TitleH2spans 
                                ref={this.myRef2}
                                txtBold='Title H2'
                                txtReg='asdfasdf Lorem ipsum dolor sit amet'
                                theclass={`title-h2`}
                            />
                        </div>
                        </OnVisible>
                        <Paragraph
                            txt='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                        />
                    </section>
                    <section className='section-1'>
                         <div className="title-h2-wrapper">
                            <TitleH2spans
                                ref={this.myRef3}
                                txtBold='Title H2  '
                                txtReg='Lorem ipsum dolor sit ametelitr'
                                theclass={`title-h2`}
                            />
                        </div>
                        <Paragraph
                            txt='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                        />
                        <Paragraph
                            txt='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.'
                        />
                    </section>
            </div>
                </Transition>
        );
    }
}

export default Page1;
