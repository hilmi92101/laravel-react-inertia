import React from 'react';

import Container1 from '@/Components/TailwindComponents/Container1';
import Header3 from '@/Components/TailwindComponents/Header3';
import Card3 from '@/Components/TailwindComponents/Card3';

const Index = () => {
    
    return (
        
        <>
            <Header3 text='Sections' />
            <Container1>
                <div className="grid grid-cols-2 gap-4">
                    <Card3 text="Basic React" route="basic-react.index" />
                    <Card3 text="Tailwind CSS Components" route="tailwindcss-components.index" />
                </div>
                
            </Container1>
        </>
    );
};

export default Index;