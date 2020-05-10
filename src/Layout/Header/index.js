import React, {Component} from 'react'
import {Layout, Menu} from "antd";
import Logo from '../../../src/Assets/images/logo.png'
import TextLogo from '../../../src/Assets/images/text-logo.png'
import './header.scss'

export default class Header  extends Component {

    render(){
        const {Header} = Layout;

        return (
            <Header className="flex-align-center container header" theme={'light'}>
                <div className="logo-block">
                    <img src={Logo} width='48px'/>
                    <img src={TextLogo} width='120px'/>

                </div>
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">Доставка</Menu.Item>
                    <Menu.Item key="2">Контакты</Menu.Item>
                    <Menu.Item key="3">Галерея</Menu.Item>
                    <Menu.Item key="4">О нас</Menu.Item>
                </Menu>
            </Header>
        )
    }
}
