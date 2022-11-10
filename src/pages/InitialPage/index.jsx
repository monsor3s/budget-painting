import React from 'react'
import Header from '../../components/Header';

import '../../styles/components/header.css';
import '../../styles/components/initialPage.css';


function InitialPage() {
  return (
    <div id="container">
      <section className="main-section">
        <Header />
      </section>
    </div>
  )
}

export default InitialPage;