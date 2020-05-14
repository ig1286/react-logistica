import React from 'react';
import LinkWrapper from './LinkWrapper';

const Header = () => {
    return (
        <nav>
            <div className="color-text nav-wrapper purple darken-4">
                <a href="/" className="brand-logo" activeStyle={{}}>Cadastro de Produto</a>
                <ul className="right">
                    <li><LinkWrapper to='/home'>Home</LinkWrapper></li>
                    <li><LinkWrapper to='/servicos'>Serviços</LinkWrapper></li>
                    <li><LinkWrapper to='/contatos'>Contatos</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;