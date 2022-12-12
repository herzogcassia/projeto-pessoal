import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Favicon from '../components/Seo';
import { NextPageWithLayout } from './_app'


const Home: NextPageWithLayout = (props) => {
    return (
        <div>
                <Favicon />
                <Header />
                <Layout />
        </div>
    )
}

export default Home;