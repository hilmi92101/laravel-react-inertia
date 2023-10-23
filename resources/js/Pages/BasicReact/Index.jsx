import React from 'react';

import Layout from '@/Layouts/BasicReactLayout';
import Container1 from '@/Components/TailwindComponents/Container1';
import Card3 from '@/Components/TailwindComponents/Card3';
import Header3 from '@/Components/TailwindComponents/Header3';

const Index = () => {

    return (
        <Layout>
            <Header3 text='Basic React' />
            <Container1>
                <div className="grid grid-cols-2 gap-4">
                    <Card3 text="Functional Component" route="basic-react.functional-component" />
                    <Card3 text="Class Component" route="basic-react.class-component" />
                    <Card3 text="Children Props Component" route="basic-react.children-props-component" />
                    <Card3 text="Hook: useState" route="basic-react.use-state-component" />
                </div>
            </Container1>
            
        </Layout>
    );
};

export default Index;