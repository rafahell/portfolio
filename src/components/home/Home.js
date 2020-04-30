import React, { useState } from 'react';
import Nav from '../nav/Nav';
import './home.scss'

const Home = (props) => {
    const [isToggled, setToggled] = useState(false);

    return (
        <React.Fragment>
            <Nav isToggled={isToggled} setToggled={setToggled} />
            <div className="bg">Home</div>
        </React.Fragment>

    )
}

export default Home;