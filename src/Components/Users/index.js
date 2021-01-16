import React from 'react';
import './style.css';

const Users = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="title-block">
                    <h3>Our Staff</h3>
                        <h2>Meet The Buther Block team</h2>
                </div>
                <div className="content">
                    <div className="user-1">
                        <div className="photo">
                            <img src="./1-1.jpg" />
                        </div>
                        <div className="description">
                            <h4>Kevin</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="user-2">
                        <div className="photo">
                            <img src="./2-2.jpg" />
                        </div>
                        <div className="description">
                            <h4>Austin</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="user-3">
                        <div className="photo">
                            <img src="./3-2.jpg" />
                        </div>
                        <div className="description">
                            <h4>Taylor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Users;