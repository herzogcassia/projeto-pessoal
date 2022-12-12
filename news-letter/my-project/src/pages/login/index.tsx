import Layout from '../../components/Layout';
import Favicon from '../../components/Seo';
import Header from '../../components/Header';
import { NextPageWithLayout } from '../_app'
import { Input } from '../../components/Input';


const Login: NextPageWithLayout = (props) => {
    return (
        <>
            <Header />
            <div className='flex h-screen bg-lightRose'>
                <div>
                    <Input />
                </div>
            </div>

        </>
    )
}

export default Login;