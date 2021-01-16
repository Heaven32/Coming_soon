import React from 'react';
import './style.css';

const About = () => {
    return (
        <div className="">
            <div className="container">
                <div className="row">
                    <div className="row-one">
                        <div>
                            <h4>Your local butcher</h4>
                            <h2>Get to Know Us</h2>
                        </div>
                        <div>
                            <p>Whether you’re shopping on a budget for a family of 6, or looking for a unique addition to your date-night charcuterie board, we have what you’re looking for. We offer high-quality delicious meats and excellent customer service because we’re passionate about sending customers home happy and ready to eat.</p>
                        </div>
                    </div>
                    <div className="row-two">
                        <img src="./3.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;