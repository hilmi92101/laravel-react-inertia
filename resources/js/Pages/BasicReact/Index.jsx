import React from 'react';

import Layout from '@/Layouts/BasicReactLayout';
import Card1 from '@/Components/TailwindComponents/Card1';

const Index = () => {

    return (
        <Layout>

            <div className="container mx-auto sm:px-4 md:px-6 lg:px-8 grid gap-4 lg:grid-cols-2 md:grid-cols-2">

                <Card1 text="Card 1" route="landing.home" />
                <Card1 text="Card 2" route="landing.about" />

            </div>





        </Layout>
    );
};

export default Index;