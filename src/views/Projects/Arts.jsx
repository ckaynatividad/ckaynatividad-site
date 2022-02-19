import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ArtsList from '../../components/Projects/ArtsList';

export default function Arts() {
  return (
    <>
      <Header />
      <div>
        <ArtsList />
      </div>
      <Footer />
    </>
  );
}
