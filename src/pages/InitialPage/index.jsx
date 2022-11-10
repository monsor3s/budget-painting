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
        <body className="main-body">
          <Button />
        </body>
      </section>
    </div>
  )
}

export default InitialPage;