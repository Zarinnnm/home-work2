import React from 'react';
import Title from "../title/Title";
import About from "../about/About";

function MainPage(props) {
    return (
        <div>
            <Title title={'Hello World'} />
            <About info={{title: "Some Title", body:"Some body"}}/>
        </div>
    );
}

export default MainPage;