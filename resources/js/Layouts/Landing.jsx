import React from 'react';

function Layout({ children }) {
    return (
        <div className='wrapper-landing'>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;