import React from 'react';

const Container = ({children}) => {
       return (
              <div className='max-w-screen-xl lg:mx-20 px-4 lg:px-0'>
                     {children}
                     
              </div>
       );
};

export default Container;