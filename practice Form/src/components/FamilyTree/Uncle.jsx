import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='Rony'></Cousin>
                <Cousin name='Rubina'></Cousin>
                <Cousin name='Joya'></Cousin>
                
            </section>
        </div>
    );
};

export default Uncle;