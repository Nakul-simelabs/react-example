import React, {Component} from 'react';
import {Modal, Button} from 'antd';
import {connect} from "react-redux";
import {DATA_ACTIONS} from './../../redux/actions'
import {Form, Icon, Input} from 'antd';


const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginModal extends Component {

    constructor(props) {
        super(props);
        this.state = {visible: props.data};
    }

    // showModal = () => {
    //     // this.setState({
    //     //     visible: true,
    //     // });
    //     const {get_data} = this.props;
    //     get_data();
    // }

    handleCancel = (e) => {
        console.log(e);
        // this.setState({
        //     visible: false,
        // });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {do_login} = this.props;
                do_login(values);
                console.log('Received values of form: ', values);
            }
        });
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (<Modal
            title="Basic Modal"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={[
                <Button key="back" onClick={this.handleCancel}>Return</Button>,
                <Button key="submit" type="primary" onClick={this.handleSubmit}
                        disabled={hasErrors(getFieldsError())}
                >
                    Submit
                </Button>,
            ]}
        >
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem
                    validateStatus={userNameError ? 'error' : ''}
                    help={userNameError || ''}
                >
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                >
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               type="password" placeholder="Password"/>
                    )}
                </FormItem>
            </Form>
        </Modal>)
    }
}

const LoginForm = Form.create()(LoginModal);

export default connect(state => ({
    data: state.default.get('visible')
}), {})(LoginForm)
