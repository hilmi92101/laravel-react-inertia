import React from 'react';

import Layout from '@/Layouts/BasicReactLayout';
import { Card2 } from '@/Components/TailwindComponents/Card2';
import Header2 from '@/Components/TailwindComponents/Header2';

const Index = () => {

    return (
        <Layout>

            
            <Header2 text="Basic React" />
            <div className="container mx-auto px-4 sm:px-8 md:px-6 lg:px-8 grid gap-4 lg:grid-cols-2 md:grid-cols-2">
                <Card2 text="Functional Component" route="basic-react.functional-component" />
                <Card2 text="Class Component" route="basic-react.class-component" />
                <Card2 text="Children Props Component" route="basic-react.children-props-component" />
            </div>

        </Layout>
    );
};

export default Index;