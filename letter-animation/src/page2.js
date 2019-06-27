import React, { Component } from 'react';
import TitleH1bird from './title-h1bird'; 
import TitleH2spans from './title-h2spans';
import Paragraph from './paragraph';
import { TimelineMax } from "gsap/all";
import { withRouter } from "react-router-dom";

class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0, 
            height: 0,
            actualElement: ''
        };

        this.h1Ref = React.createRef();
        this.h2Ref1 = React.createRef();
        this.h2Ref2 = React.createRef();
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.thescroll = {
            fadeIn: false,
            fadeOut: false
        };
    }
    componentDidMount() {  
        this.prev = window.scrollY;
        document.addEventListener('scroll', this.handleScrollBird);     
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() { 
        window.removeEventListener('scroll', this.handleScrollBird); 
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    handleScrollBird = (e) => {
        let theh1 = this.h1Ref.current;
        let theh2 = [this.h2Ref1.current, this.h2Ref2.current];
        if(theh1 && theh2){
         
            const scrollTop = theh1.getBoundingClientRect().top;
            const scrollBottom = theh1.getBoundingClientRect().bottom;
            const scrollHeight = theh1.getBoundingClientRect().height;
            const elPercent = (Math.floor(this.state.height/100*30));
            const elPercent2 = (Math.floor(this.state.height/100*10));
            const elPercenttitle2 = (Math.floor(this.state.height/100*50));
        
            let allWordsBold = theh1.querySelectorAll('.main-title span.word');
            theh2.forEach((item)=>{
                const scrollToph2 = item.getBoundingClientRect().top;
                const scrollBottomh2 = item.getBoundingClientRect().bottom;
                const scrollHeighth2 = item.getBoundingClientRect().height;
                const bird = item.querySelector('.bird');
                const bird2 = item.querySelector('.bird2');
                let animh2 = new TimelineMax();
                if (scrollToph2 + scrollHeighth2 > 0 && scrollBottomh2 > 0 && scrollToph2 > elPercenttitle2 && scrollToph2 < elPercenttitle2+20 && this.prev < window.scrollY) {
                    console.log('bird');
                    animh2.add("bird");
                    animh2.set([bird, bird2], {opacity:0, x: 0, y: 0}, "bird")
                          .to([bird, bird2], 0.1, {opacity:1}, "bird")
                          .to([bird], 8, {x: '2000px', y: '-900px'}, "bird")
                          .to([bird2], 8, {x: '2500px', y: '-800px'}, "bird")
                          .to([bird, bird2], 0.2, {opacity:0}, "bird -= 0.2" );
                }
            })  

            allWordsBold.forEach((item, index)=>{
                let all1 = [];
                let all2 = [];
                let all1bird = [];
                let all2bird = [];
                let all1bird2 = [];
                let all2bird2 = [];
                let allLetters = item.querySelectorAll(`span.main-title--bold`);
                let allLettersbird = item.querySelectorAll('span.main-title--bold + span.bird');
                let allLettersbird2 = item.querySelectorAll('.main-title span.bird2');
                let allLetters2 = item.querySelectorAll('span.main-title--regular');
                let allLetters2bird = item.querySelectorAll('span.main-title--regular + span.bird');
                let allLetters2bird2 = item.querySelectorAll('.main-title span.bird2b');
                allLetters.forEach((item, i)=>{
                    all1.push(item);
                }); 
                allLettersbird.forEach((item, i)=>{
                    all1bird.push(item);
                });
                allLettersbird.forEach((item, i)=>{
                    all1bird.push(item);
                });
                allLettersbird2.forEach((item, i)=>{
                    all1bird2.push(item);
                });
                allLetters2.forEach((item, i)=>{
                    all2.push(item);
                });
                allLetters2bird.forEach((item, i)=>{
                    all2bird.push(item);
                });
                allLetters2bird2.forEach((item, i)=>{
                    all2bird2.push(item);
                });
                if (scrollTop + scrollHeight > 0 && scrollBottom > 0 && scrollTop > elPercent && scrollTop < elPercent+20 && this.prev < window.scrollY) {
                    this.aniLetters(all1, all2);
                    this.aniBirdLetters(all1bird, all2bird, all1bird2, all2bird2);
                }else if(scrollTop + scrollHeight > 0 && scrollBottom > 0 && scrollTop > elPercent2 && this.prev > window.scrollY){
                    this.aniLetters2(all1, all2);
                };
            })
        }
        this.prev = window.scrollY;   
    }
    aniBirdLetters(all1bird, all2bird, all1bird2, all2bird2){
        let anim = new TimelineMax();
        anim.add("staggerbird");
        anim.set([all1bird, all2bird, all1bird2, all2bird2], {opacity:0, x: 0, y: 0}, "staggerbird")
            .staggerTo(all1bird, 0.5, {opacity:1}, -0.2, "staggerbird")
            .staggerTo(all2bird, 0.5, {opacity:1}, -0.2, "staggerbird")
            .staggerTo(all1bird2, 0.5, {opacity:1}, -0.2, "staggerbird")
            .staggerTo(all2bird2, 0.5, {opacity:1}, -0.2, "staggerbird")
            .staggerTo(all1bird, 3.5, {x: 600, y: -500}, -0.2, "staggerbird")
            .staggerTo(all2bird, 3.5, {x: 600, y: -500}, -0.2, "staggerbird")
            .staggerTo(all1bird2, 3.5, {x: 400, y: -600}, -0.2, "staggerbird")
            .staggerTo(all2bird2, 3.5, {x: 400, y: -600}, -0.2, "staggerbird");
        return anim;
     }

     aniLetters(all1, all2){
         let anim = new TimelineMax();
         anim.add("stagger");
         anim.staggerTo(all1, 0.3, {opacity:0}, -0.2, "stagger")
             .staggerTo(all2, 0.3, {opacity:0}, -0.2, "stagger");
         return anim;
     }
     aniLetters2(all1, all2){
         let anim = new TimelineMax();
         anim.add("stagger");
         anim.to(all1, 0.5, {opacity:1}, "stagger")
              .to(all2, 0.5, {opacity:1}, "stagger");
         return anim;
     }

    render() {
        return (
            <div className="content content-page2">
                <section className='section-1'>
                        <TitleH1bird
                                ref={this.h1Ref}
                                txtBold='Flying letters'
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
                        
                    </section>
                    <section className='section-1'>
                        <div className="title-h2-wrapper">
                            <TitleH2spans
                                txtBold='Scroll me'
                                txtReg='... and see the Birds fly away'
                                hasBird={true}
                                ref={this.h2Ref1}
                                theclass={'title-h2'}
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
                    <section className='section-1'>
                        <div className="title-h2-wrapper">
                            <TitleH2spans
                                txtBold='Scroll me'
                                txtReg='But please not to fast'
                                hasBird={true}
                                ref={this.h2Ref2}
                                theclass={'title-h2'}
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
        );
    }
}


export default withRouter(Page2);
