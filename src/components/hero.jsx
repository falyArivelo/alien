import React, { Suspense } from 'react'
import { motion as m } from "framer-motion"
import WordByword from '../motions/wordByword_apparition'
import { FormattedMessage, useIntl } from 'react-intl'
import Sphere from '../components/Sphere';

const Hero = () => {

    const intl = useIntl();
    const descriptionText = intl.formatMessage({ id: 'description' });

    return (
        <div className='hero' >
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // exit={{ opacity: 0 }}
                transition={{ duration: 5, ease: [0.22, 1, 0.36, 1], }}
            >
                {/* <h1>home</h1> */}
                {/* <p><FormattedMessage id="description" /></p> */}

                <WordByword text={descriptionText} />
                {/* <div className="description">
          Passionate web designer and developer, crafting unique online experiences.
        </div> */}
            </m.div>
            <Sphere  id='canvas-container' />


        </div>
    )
}

export default Hero