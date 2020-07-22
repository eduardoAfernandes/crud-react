import React from 'react';
import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo!</h1>
            <p className="lead">
                Crud em React, utilize a barra de navegação para acessar as páginas!!
                </p>
            <hr className="my-4" />
            <p className="lead">
                <Link to="/cadastro-produtos" className="btn btn-primary btn-lg" role="button">Cadastrar</Link>
            </p>
    </div>
    )
}