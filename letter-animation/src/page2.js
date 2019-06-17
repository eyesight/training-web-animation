import React, { Component } from 'react';
import TitleH1bird from './title-h1bird'; 
import TitleH2 from './title-h2';
import Paragraph from './paragraph';
import { Transition } from "react-transition-group";
import { TweenMax, TimelineMax } from "gsap/all";
import { withRouter } from "react-router-dom";

const startState = { autoAlpha: 0, y: -500, position: "absolute" };

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0, 
            height: 0,
            actualElement: ''
        };

        this.h1Ref = React.createRef();
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {  
        document.addEventListener('scroll', this.handleScrollBird);     
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        console.log('page2 mounting');
    }

    componentWillUnmount() { 
        console.log('page2 unmounting');
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    handleScrollBird = (e) => {
        let allElements = [this.h1Ref.current];
        if(allElements.length > 0 && this.h1Ref.current){
            let all1 = [];
            let all2 = [];
            let all1bird = [];
            let all2bird = [];

            const tl = new TimelineMax();
            const tl2 = new TimelineMax();
            allElements.forEach((elem)=>{
                const scrollTop = elem.getBoundingClientRect().top;
                const scrollBottom = elem.getBoundingClientRect().bottom;
                const scrollHeight = elem.getBoundingClientRect().height;
                const elPercent = (this.state.height/100*30);
                tl.add("stagger");
                tl2.add("stagger2");
                let allLetters = elem.querySelectorAll('span.main-title--bold');
                let allLettersbird = elem.querySelectorAll('span.main-title--bold + span.bird');
                let allLetters2 = elem.querySelectorAll('span.main-title--regular');
                let allLetters2bird = elem.querySelectorAll('span.main-title--regular + span.bird');
                allLetters.forEach(function(item, i){
                        all1.push(item);
                });
                allLettersbird.forEach(function(item, i){
                    all1bird.push(item);
                });
                allLetters2.forEach(function(item, i){
                    all2.push(item);
                });
                allLetters2bird.forEach(function(item, i){
                    all2bird.push(item);
                });
                console.log(allLetters.length);
                console.log(allLetters2.length);
                if (scrollTop + scrollHeight > 0 && scrollBottom > 0 && scrollTop < elPercent) {
                    tl.staggerTo(all1, 0.5, {opacity:0, onComplete: ()=>{console.log('test')}}, -0.2, "stagger")
                    tl.staggerTo(all2, 0.5, {opacity:0, onComplete: ()=>{console.log('test2')}}, -0.2, "stagger")
                }else{
                    tl2.staggerTo(all1, 0.5, {opacity:1, y:0, x:0}, -0.2, "stagger")
                    tl2.staggerTo(all2, 0.5, {opacity:1, y:0, x:0}, -0.1, "stagger")
                }
            })}
    }

    render() {
        const { show } = this.props;
        return (
            <Transition
                    unmountOnExit={true}
                    in={show}
                    timeout={{
                        appear: 5000,
                        enter: 5000,
                        exit: 500,
                        }}
                    onEnter={node => {
                        TweenMax.set(node, startState)}}
                    onEntering={(node)=>{
                    }}
                    
                    addEndListener={ (node, done) => {
                        TweenMax.to(node, 1, {
                            autoAlpha: show ? 1 : 0,
                            y: show ? 0 : 500,
                            position: show ? "relative" : "absolute",
                            onComplete: done
                        });
                    }}
                    onExit={(node)=>{
                    }}
                >
                <div className="content content-page2">
                <section className='section-1'>
                        <TitleH1bird
                                ref={this.h1Ref}
                                txtBold='Floating letters'
                                txtReg='Flying away when scrolling'
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
                        <TitleH2
                            txtBold='Title H2  '
                            txtReg='asdfasdf Lorem ipsum dolor sit amet, consetetur sadipscing elitr, '
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
                        <TitleH2
                            txtBold='Title H2  '
                            txtReg='asdfasdf Lorem ipsum dolor sit amet, consetetur sadipscing elitr, '
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
                        <TitleH2
                            txtBold='Title H2  '
                            txtReg='asdfasdf Lorem ipsum dolor sit amet, consetetur sadipscing elitr, '
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


export default withRouter(Page2);
