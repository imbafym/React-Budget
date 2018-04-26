import React from 'react'
import { Icon, Tabs, Form, Input, Modal, Button } from 'antd';


class Login_popup extends React.Component{


render(){
    return(

        <Modal
        title='User Account'
        wrapClassName='verticle-center'
        visible={this.props.user.isAuthModalShown}
				onCancel={this.handleCancel}
				onOk={this.handleOk}
      >
        <Tabs
          type='card'
          activeKey={this.state.activeTabKey}
					onChange={this.changeTab}
        >
          <TabPane tab='Login' key='1'>
            <Form layout='vertical'>
              <FormItem label='Username'>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Enter username...' />)}
              </FormItem>
              <FormItem label='Password'>
                {getFieldDecorator('password', { rules: [{ required: true, message: 'Please input your password!' }] })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Enter password...' type='password' />)}
              </FormItem>
            </Form>
            Login by: <Button icon='github' size='large' onClick={this.handleGithubLogin}>github</Button>
          </TabPane>

          <TabPane tab='Register' key='2'>
            <Form layout='vertical'>
              <FormItem label='Username'>
                {getFieldDecorator('r_username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Enter username...' />)}
              </FormItem>
              <FormItem label='Password'>
                {getFieldDecorator('r_password', { rules: [{ required: true, message: 'Please input your password!' }] })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Enter password...' type='password' />)}
              </FormItem>
              <FormItem label='Password Again'>
                {getFieldDecorator('r_confirmPassword', {
                  rules: [
                    { required: true, message: 'Please verify your password!' },
                    { validator: this.checkPassword }
                  ]
                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Verify password' type='password' />)}
              </FormItem>
            </Form>
          </TabPane>
        </Tabs>
      </Modal>

    );
}

}


export default Login_popup;