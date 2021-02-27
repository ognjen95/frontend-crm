import React from 'react';
import Footer from './Footer';
import Header from './Header';

const DefaultLayout = ({ children, history }) => {
  return (
    <div className="default-layout">
      <header className="header">
        <Header history={history} />
      </header>
      <main className="main"> {children} </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
