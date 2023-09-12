import React from 'react';
import { goToRoute } from '@/Modules/Helpers'; 

const About = () => {

    return (
        <div>
            <h1>This is the Index page</h1><br />
            <button onClick={() => goToRoute('landing.home')}>Go to Home page</button>
        </div>
    );
};

export default About;