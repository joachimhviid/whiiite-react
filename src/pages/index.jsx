import React from 'react';
import {Link} from "react-router-dom";
import Header from '../components/Header';
import MyWork from '../components/MyWork';

const MainPage = () => {
    return (
        <div>
            {/* <div className="dots" /> */}
            <Header />
            <MyWork />
            <div className="container">
                <div className="row space" />
                    <div className="row space center">
                        <Link id="seeMore" to="../mywork">See more</Link>
                    </div>
                <div className="row space" />
            </div>
        </div>
    );
};

export default MainPage;