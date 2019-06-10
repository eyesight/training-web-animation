import React, { Component } from 'react';
import TitleH1 from './title-h1'; 
import TitleH2 from './title-h2';
import Paragraph from './paragraph';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
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
            theclass1: ''
          };
        this.myRef = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {   
        document.addEventListener('scroll', this.handleScroll);     
    }

    componentWillUnmount() { 
        window.removeEventListener('scroll', this.handleScroll); 
    }
   
    componentDidUpdate() {
    }
    componentWillUpdate() {
        
    }
    updateVis(e) {
        console.log(e);
    }
    
    handleScroll = (e)=>{
        if(this.myRef.current){

        
        const scrollTop = this.myRef.current.getBoundingClientRect().top;
        const scrollBottom = this.myRef.current.getBoundingClientRect().bottom;
        const scrollHeight = this.myRef.current.getBoundingClientRect().height;

/*         if (scrollHeight - scrollTop + 252 > 0 && scrollBottom > 0) {    */        
        if (scrollTop + scrollHeight > 0 && scrollBottom > 0) {
            this.setState({
                theclass1: 'visible'
            })
            }else{
                this.setState({
                    theclass1: 'notvisible'
                })
            }
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
            <div className="content content-page1" onScroll={this.handleScroll}>
                    <section className='section-1' >
                        <TitleH1
                            ref={this.myRef}
                            txtBold='Title H1'
                            txtReg='asdfasdf Lorem ipsum '
                            theclass={`main-title ${this.state.theclass1}`}
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
                        <OnVisible onChange={this.updateVis.bind(this)} className="title-h2-wrapper">
                            <TitleH2 
                                txtBold='Title H2  here we go'
                                txtReg='asdfasdf Lorem ipsum dolor sit amet, consetetur sadipscing elitr, '
                            />
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
                        <Paragraph
                            txt='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
                            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum 
                            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.

                            HERE WE END'
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

export default Page1;
