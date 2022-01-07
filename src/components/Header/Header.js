import React from 'react'

import Menu from '../Menu'

import './style.scss'

const Header = () => (
    <header className="app-header">
        <span className="app-header__logo"/>
        <Menu />
    </header>
)

export default Header
