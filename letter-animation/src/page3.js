import React, { Component } from 'react';
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

const startState = { autoAlpha: 0, y: 500, position: "absolute" };

class Page3 extends Component {
    render() {
        const { show } = this.props;

        return (
            <Transition
                    unmountOnExit
                    in={show}
                    timeout={{
                        appear: 500,
                        enter: 300,
                        exit: 500,
                        }}
                    onEnter={node => TweenMax.set(node, startState)}
                    addEndListener={ (node, done) => {
                        console.log(node);
                        TweenMax.to(node, 1, {
                            autoAlpha: show ? 1 : 0,
                            y: show ? 0 : -500,
                            position: show ? "relative" : "absolute",
                            onComplete: done
                        });
                    }}
                >
                <div className="content content-page3">
                <section className='section-1'>
                <div>TEST Page 3</div>
                </section>
                </div>
            </Transition>
        );
    }
} 


export default Page3;
