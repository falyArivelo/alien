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
        // gsap.to("#text",{
        //   ease: 'power1.inOut',
        //   opacity: 1,
        //   y: 0,
        // })

        gsap.fromTo(".planet_txt", {
            opacity: 0.5,
            ease: 'power2.inOut',
            x: '-120%',
        }, {
            opacity: 1,
            x: '0%',
            duration: 1,
            delay: 1,
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
            delay: 1,
            stagger: 1
        })
    })

    return (
        <div className='hero' >
            {/* <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                transition={{ duration: 5, ease: [0.22, 1, 0.36, 1], }}
            >
                <WordByword text={descriptionText} /> 
 
            </m.div> */}

            <div className="txt planet_txt">
                Planet
            </div>
            <Sphere />

            <div className="txt earth_txt">
                earth
            </div>

            <script type="module" src="https://unpkg.com/@splinetool/viewer@1.1.4/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/OUtlkLl1hUjlEpOc/scene.splinecode"></spline-viewer>
        </div>
    )
}

export default Index