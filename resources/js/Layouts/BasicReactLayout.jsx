import React from 'react';

function Layout({ children }) {
    return (
        <div className='wrapper-basic-react'>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;