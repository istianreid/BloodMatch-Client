import React from 'react'


import "./HeroSection.css";

function HeroSection() {
    return (
        <>
        <div className="cover-image">
            <div className="container cover-container">
                <div className="call-to-action">
                    <span><h1>Donate Blood and Save One Life.</h1></span>
                    <span><p>Every drop will help. Request or Donate blood to save peoples life.</p></span>
                    <div className="cta-button">
                        <span><a className="button-white" href="/explore">Explore</a></span>
                        <span><a className="button-trans" href="/requestablood">Request Blood</a></span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection;
