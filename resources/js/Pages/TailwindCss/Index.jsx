import React from 'react';

import Layout from '@/Layouts/BasicReactLayout';
import Container1 from '@/Components/TailwindComponents/Container1';
import Card3 from '@/Components/TailwindComponents/Card3';
import Header3 from '@/Components/TailwindComponents/Header3';

const Index = () => {

    return (
        <Layout>
            <>
                <Header3 text='Tailwind CSS Components' />
                <Container1>
                    <div className="grid grid-cols-2 gap-4">
                        <Card3 text="Card" route="#" />
                    </div>
                    
                </Container1>
            </>

        </Layout>
    );
};

export default Index;