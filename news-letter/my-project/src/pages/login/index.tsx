import Layout from '../../components/Layout';
import Favicon from '../../components/Seo';
import Header from '../../components/Header';
import { NextPageWithLayout } from '../_app'
import { Input } from '../../components/Input';


const Login: NextPageWithLayout = (props) => {
    return (
        <div className='flex h-screen bg-lightRose'>
            <Header />
            <div className='flex flex-col items-center w-1/2 h-full ml-auto bg-abacate'>
                {/* <div className="pt-[80px]  bg-purple-500 h-[500px] bg-red-200/20 flex items-center"> */}
                    <Input />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Login;