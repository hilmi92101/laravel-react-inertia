import React, { Component } from 'react';

import Layout from '@/Layouts/BasicReactLayout';
import Header3 from '@/Components/TailwindComponents/Header3';

class ClassComponent extends Component {
    render() {
        return (
            <Layout>
                <Header3 text='Example: Class Component' />
            </Layout>
        );
    }
}

export default ClassComponent;