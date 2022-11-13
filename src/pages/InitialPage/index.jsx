import React from 'react'
import Button from '../../components/Button';
import Header from '../../components/Header';

import '../../styles/components/initialPage.css';
import '../../styles/components/header.css';
import '../../styles/components/button.css';


function InitialPage() {
  return (
    <div id="container">
      <section className="main-section">
        <Header />
        <div className="main-body">
          <Button />
        </div>
      </section>
    </div>
  )
}

export default InitialPage;