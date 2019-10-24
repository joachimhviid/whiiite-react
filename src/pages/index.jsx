import React from 'react';
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
                        <a id="seeMore" href="/mywork">See more</a>
                    </div>
                <div className="row space" />
            </div>
        </div>
    );
};

export default MainPage;