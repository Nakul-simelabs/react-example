import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './Headers.css';
import LoginForm from '../modals/login_modal'
import connect from "react-redux/es/connect/connect";
import {DATA_ACTIONS} from './../../redux/actions'

const {get_data, do_login, showModal} = DATA_ACTIONS;
const { Header} = Layout;


class Headers extends Component {

    showModal = ()=>{
        const {showModal} = this.props;
        showModal(true)
        console.log("tag1","reached model function")
    }

  render() {
    return (
            <Header>
                <div className="logo" />
                <Menu mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                    <Menu.Item key="1" onClick={this.showModal.bind(this)}>nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                <LoginForm/>
            </Header>
    );
  }
}

export default  connect(state => ({
    data: state.default
}), {
    get_data, do_login, showModal
})(Headers);
