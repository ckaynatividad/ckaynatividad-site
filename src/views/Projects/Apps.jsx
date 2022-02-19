import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AppsList from '../../components/Projects/AppsList';

export default function Apps() {
  return (
    <>
      <Header />
      <div>
        <AppsList />
      </div>
      <Footer />
    </>
  );
}
