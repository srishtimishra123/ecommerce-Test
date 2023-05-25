import React from 'react';
import Products from '../components/Products';
import ResponsiveSlider from './ResponsiveSlider';

const Home = () => {
    return (
        <div>
           <ResponsiveSlider/>
            <section>
                <h3 className='mt-5'>Products</h3>
                <Products />
            </section>
        </div>
    );
};

export default Home;