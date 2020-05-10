import React, {Component} from 'react'
import {Layout, Menu} from "antd";
import Logo from '../../../src/Assets/images/logo.png'
import TextLogo from '../../../src/Assets/images/text-logo.png'
import Background from '../../../src/Assets/images/Background.jpg'

import './header.scss'

export default class Header  extends Component {

    render(){
        const {Header} = Layout;
        const BackgroundImage = {
            backgroundImage: `url(${Background})`,
            height:"100vh",
            width:"100%",
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
        };
        return (
            <div className="header-component relative" style={BackgroundImage}>
                <div className="overlay" />
                <Header className="flex-align-center container header relative" theme={'light'}>
                    <div className="logo-block">
                        <img src={Logo} width='48px'/>
                        <img src={TextLogo} width='120px'/>

                    </div>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{backgroundColor:"transparent"}}>
                        <Menu.Item key="1">Доставка</Menu.Item>
                        <Menu.Item key="2">Контакты</Menu.Item>
                        <Menu.Item key="3">Галерея</Menu.Item>
                        <Menu.Item key="4">О нас</Menu.Item>
                    </Menu>
                </Header>
            </div>
        )
    }
}
