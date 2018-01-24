import React from 'react';
import '../App.css';


const internal = (props) => {
    return (

            <section className="InternalPage">
                {props.children}
            </section>
    );
}

export default internal;