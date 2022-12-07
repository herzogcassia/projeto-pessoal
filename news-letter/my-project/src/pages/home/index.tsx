import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { NextPageWithLayout } from '../_app'


    const Home: NextPageWithLayout = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <Layout/>
        </div>
        )
}

export default Home;