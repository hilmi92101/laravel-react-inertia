import React from 'react';
import { goToRoute, someOtherFunction } from '@/Modules/Helpers'; 

const Index = () => {
    
    return (
        <div>
            <h1>This is the Index page</h1><br />
            <button onClick={() => goToRoute('landing.about')}>Go to About page</button><br />
            <button onClick={() => someOtherFunction()}>Test</button>
        </div>
    );
};

export default Index;