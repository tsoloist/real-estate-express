import React from 'react';
import '../App.css';
import Nav from '../Nav/Nav.js';
import Footer from '../Footer/Footer';



const layout = (props) => {
    return (
        <div>
            <div className="NavBg">
                <Nav />
            </div>
            <main className="App">
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default layout;