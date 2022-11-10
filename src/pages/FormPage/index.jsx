import React from "react";
import Header from "../../components/Header";

import "../../styles/components/header.css";
import "../../styles/components/formPage.css";



function FormPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
    
        console.log("*** handleSubmit", data);
      };

  return (
    <div id="container">
    <section className="main-section">
        <Header />
        <body className="main-body">
            <form className="main-form" onSubmit={handleSubmit}>
                <section className="wrap-form">
                    <div className="container-input">
                        <div>
                            <label className="main-label">Cliente:</label>
                            <input
                                className="main-input"
                                type="text"
                                name="client"
                                // onChange={handleInputChange}
                                // value={formValues.name || ""}
                            />
                        </div>
                    </div>
                    <div className="container-input -phone">
                        <div>
                            <label 
                            className="main-label">
                            Telefone Contato:
                            </label>
                            <input
                                className="main-input"
                                type="tel"
                                name="tel"
                                placeholder="(00) 00000-0000"
                                // onChange={handleInputChange}
                                // value={formValues.name || ""}
                            />
                        </div>
                        <div>
                            <label 
                            className="main-label">
                            Placa veículo:
                            </label>
                            <input 
                            className="main-input"
                            type="text"
                            name="board"
                            />
                        </div>
                    </div>
                    <button>Gerar</button>
                </section>
            </form>
        </body>
    </section>
    </div>
);
}

export default FormPage;
