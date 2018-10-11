import React, {Component} from 'react';
import './App.css';
import {Button} from 'antd';
import {Layout, Skeleton} from 'antd';

const {Content} = Layout;

class App extends Component {

    render() {
        return (
            <Content style={{padding: '0 50px'}}>
                <div style={{background: '#a5a8a5', padding: 24, minHeight: 500, margin: 10}}>
                    Content

                    <Skeleton active/>

                    <Button type="primary">Button</Button>

                </div>
            </Content>
        );
    }
}

export default App;

