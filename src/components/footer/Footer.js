import React, { Component } from 'react';
import { Layout} from 'antd';
import './Footer.css';

const { Footer } = Layout;


class FooterComponent extends Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
      <h1>footer</h1>
      </Footer>
    );
  }
}

export default FooterComponent;
