import React, { Component } from 'react';
import TitleH1 from './title-h1'; 
import TitleH2 from './title-h2';
import Paragraph from './paragraph';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

const startState = { autoAlpha: 0, y: -500, position: "absolute" };

class Page2 extends Component {
    render() {
        const { show } = this.props;
        return (
            <Transition
                    unmountOnExit
                    in={show}
                    timeout={{
                        appear: 100,
                        enter: 5000,
                        exit: 500,
                        }}
                    onEnter={node => {
                        console.log('onEnter');
                        TweenMax.set(node, startState)}}
                    onEntering={(node)=>{
                        console.log('onEntering');
                    }}
                    addEndListener={ (node, done) => {
                        console.log(node);
                        TweenMax.to(node, 1, {
                            autoAlpha: show ? 1 : 0,
                            y: show ? 0 : 500,
                            position: show ? "relative" : "absolute",
                            onComplete: done
                        });
                    }}
                >
                <div className="content content-page2">
                <section className='section-1'>
                        <TitleH1 
                            txtBold='Title H1 kk'
                            txtReg='asdfasdf Lorem ipsum '
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


export default Page2;
