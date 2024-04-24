import React, { Suspense } from 'react'
import { motion as m } from "framer-motion"
import WordByword from '../../motions/wordByword_apparition'
// import { FormattedMessage, useIntl } from 'react-intl'
import Sphere from '../Sphere';
import './style.scss'
import { useIntl } from 'react-intl';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Index = () => {

    const intl = useIntl();
    const descriptionText = intl.formatMessage({ id: 'description' });

    useGSAP(() => {
        gsap.fromTo(".hero_1", {
            ease: 'power1.inOut',
            opacity: 0,
            // y: '120%',
            // width:'0%',
            scale: 0.9,
            rotation: 0.3,
            borderRadius:'10%',
            // stagger: 5
        }, {
            opacity: 1,
            scale: 1,
            // y: '0%',
            delay: 1,
            rotation: 0,
            borderRadius:'0%',
            duration: .9
        })

        gsap.fromTo(".planet_txt", {
            opacity: 0.5,
            ease: 'power2.inOut',
            x: '-120%',
        }, {
            opacity: 1,
            x: '0%',
            duration: 1,
            delay: 2,
            stagger: 1
        })

        gsap.fromTo(".earth_txt", {
            opacity: 0.2,
            ease: 'power2.inOut',
            x: '120%',
        }, {
            opacity: 1,
            x: '0%',
            duration: 1,
            delay: 2,
            stagger: 1
        })
    })

    return (
        <div className='hero' >



            <div className="hero_image">
                <img className='hero_1' src="/assets/images/hero_3.jpg" alt="" srcset="" />
            </div>

            <div className="txt earth_txt">
                LIFE
            </div>
            <div className="txt planet_txt">
                BETTER
            </div>
        </div>
    )
}

export default Index