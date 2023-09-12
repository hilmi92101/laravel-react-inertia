import React from 'react';
import { router } from '@inertiajs/react';

const About = () => {
    
    const handleClick = routeName => {
        router.visit(route(routeName), { method: 'get' }) 
    };

    return (
        <div>
            <h1>This is the Index page</h1><br />
            <button onClick={() => handleClick('landing.home')}>Go to Home page</button>
        </div>
    );
};

export default About;