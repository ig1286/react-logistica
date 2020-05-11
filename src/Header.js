import React from 'react';

const Header = () => {
    return (
        <nav>
            <div class=" color-text nav-wrapper purple darken-4">
                <a href="/" class="brand-logo" >Cadastro de Produto</a>
                <ul class="right">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/servicos">Serviços</a></li>
                    <li><a href="/contatos">Contatos</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;