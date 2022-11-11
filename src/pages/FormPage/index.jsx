import React, { useState } from "react";
import Header from "../../components/Header";

import "../../styles/components/header.css";
import "../../styles/components/formPage.css";


function FormPage() {
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        console.log("*** handleSubmit", data);
    };

    console.log('*** formValues', formValues);
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
                                onChange={handleInputChange}
                                value={formValues.client || ""}
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
                                onChange={handleInputChange}
                                value={formValues.tel || ""}
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
                            onChange={handleInputChange}
                            value={formValues.board || ""}
                            />
                        </div>
                    </div>
                    <div className="container-input -model">
                        <div>
                            <label className="main-label">Modelo Veículo:</label>
                            <input
                                className="main-input"
                                type="text"
                                name="model"
                                onChange={handleInputChange}
                                value={formValues.model || ""}
                            />
                        </div>
                        <div>
                            <label className="main-label">Dias de serviço:</label>
                            <select
                                className="main-select"
                                name="servicedays"
                                onChange={handleInputChange}
                                value={formValues.servicedays || ""}
                            >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            </select>
                        </div>
                    </div>
                    <div className="container-input">
                    <div>
                            <label className="main-label">Lanternagem:</label>
                            <div className="radios">
                                <input
                                    type="radio"
                                    value="Não"
                                    name="question"
                                    onChange={handleInputChange}
                                    checked={formValues.question === "not"}
                                />
                                    Não
                                <input
                                type="radio"
                                value="Sim"
                                name="question"
                                onChange={handleInputChange}
                                checked={formValues.question === "yes"}
                                />
                                    Sim
                            </div>
                        </div>
                    </div>
                    <button type="submit">Gerar</button>
                </section>
            </form>
        </body>
    </section>
    </div>
);
}

export default FormPage;
