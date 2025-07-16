import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import ListaPerfiles from './components/ListaPerfiles';
import Catalogo from './components/Catalogo';

function App() {
  return (
    <>
      <Header />
      <Card />
      <ListaPerfiles />
      <Catalogo />
      <React.Fragment>
        <Footer />
      </React.Fragment>
    </>
  );
}
export default App;
