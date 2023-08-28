"use client"
import React, { useEffect } from 'react'
import style from './ParagraphMove.module.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParagraphMove = () => {

    const animateParagraphs = () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:  `.${style.paragraphs}`,
                start: 'top center',
                end: 'bottom center',
                marker:true,
                scrub: true,  
            },
        });

        // Animate the first paragraph's opacity
        tl.to(`.${style.paragraph1}`, { opacity: 1, duration: 1 });
        tl.from(`.${style.paragraph2}`, { x: -100, opacity: 1, duration: 1 }, '-=0.5');
        tl.from(`.${style.paragraph3}`, { x: 100, opacity: 1, duration: 1 }, '-=0.5');
    };
        useEffect(() => {
          animateParagraphs();
        }, []);
    return (
        <div className={style.paragraphs}>
            <p className={`${style.paragraph1} ${style.para}`}>This is paragraph 1</p>
            <p className={`${style.paragraph2} ${style.para}`}>This is paragraph 2</p>
            <p className={`${style.paragraph3} ${style.para}`}>This is paragraph 3</p>
        </div>
    )
}

export default ParagraphMove