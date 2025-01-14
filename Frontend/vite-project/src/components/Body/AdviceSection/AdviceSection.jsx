import React from 'react'
import './AdviceSection.css'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { TiArrowDownThick } from "react-icons/ti";

const AdviceSection = () => {
    return (
        <>
            <section className='advice-section'>
                <div className='section-container'>
                    <div className='heading'>
                        <p>
                        📩 Today's advice!
                        </p>
                    </div>
                    <div className='advice'>
                        <p>
                        <FaQuoteLeft />{" "}Let your team work together to create a harmonious and healthy farm. Share your knowledge, tools, and skills to help each other grow and thrive.{" "}<FaQuoteRight />
                        </p>
                    </div>
                    <div className='advice'>
                        <p>
                        <FaQuoteLeft />{" "}Let your team work together to create a harmonious and healthy farm. Share your knowledge, tools, and skills to help each other grow and thrive.{" "}<FaQuoteRight />
                        </p>
                    </div>
                    <div className='scroll'>
                        <p>
                            Scroll Down ⬇️
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdviceSection
