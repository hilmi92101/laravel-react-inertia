import React from 'react';

import Layout from '@/Layouts/BasicReactLayout';
import { Card3 } from '@/Components/TailwindComponents/Card3';
import Header2 from '@/Components/TailwindComponents/Header2';

const ChildrenPropsComponent = () => {

    return (
        <Layout>

            <Header2 text="Example of Children Props Component" />
            <div className="container mx-auto sm:px-4 md:px-6 lg:px-8 grid gap-4 lg:grid-cols-2 md:grid-cols-2">
                <Card3 text="Example Component that accept children props" route="basic-react.index">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit accusamus alias voluptatum natus, nobis eius libero numquam, doloremque deleniti adipisci cum! Repellendus totam, quia impedit est corporis quaerat a?</p>
                </Card3>

                <Card3 text="Example Component that accept children props but does not use it" route="basic-react.index">
                </Card3>
            </div>

        </Layout>
    );
};

export default ChildrenPropsComponent;