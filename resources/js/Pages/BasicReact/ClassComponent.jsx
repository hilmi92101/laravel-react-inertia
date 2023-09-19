import React, { Component } from 'react';

import Layout from '@/Layouts/BasicReactLayout';
import Header2 from '@/Components/TailwindComponents/Header2';

class ClassComponent extends Component {
    render() {
        return (
            <Layout>
                <Header2 text="Example of Class Component" />
            </Layout>
        );
    }
}

export default ClassComponent;