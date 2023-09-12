import React from 'react';
import { router } from '@inertiajs/react';

const Index = () => {
    
    const handleClick = routeName => {
        router.visit(route(routeName), { method: 'get' }) 
    };

    return (
        <div>
            <h1>This is the Index page</h1><br />
            <button onClick={() => handleClick('landing.about')}>Go to About page</button>
        </div>
    );
};

export default Index;