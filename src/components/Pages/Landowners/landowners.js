import React, { Component } from 'react';
import './landowners.css';
import Header from '../../Common/Header/header';
import 'antd/dist/antd.css';
import { Radio } from 'antd'



import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    value: 1,
  };

  onChange = e => {
     console.log('radio checked', e.target.value);
     this.setState({
       value: e.target.value,
     });
   };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 8 },
        sm: { span: 12 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <>
      <Header />
      <div className='container text-center'>

   <div className='select-button'>
      <Radio.Group onChange={this.onChange} value={this.state.value}>
       <Radio value={1}>BUY</Radio>
       <Radio value={2}>Sell</Radio>
       <Radio value={3}>Joint Venture</Radio>
     </Radio.Group>
   </div>

      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="Name">
          <Input />
        </Form.Item>

        <Form.Item label="Mobile">
           <Input />
        </Form.Item>

        <Form.Item label="E-mail">
         <Input />
        </Form.Item>


        <Form.Item label="Address">
           <Input />
        </Form.Item>

        <Form.Item label="City">
           <Input />
        </Form.Item>

        <Form.Item label="State">
         <Input />
        </Form.Item>
        <Form.Item label="Country">
         <Input />
        </Form.Item>
        <Form.Item label="Dimension">
         <Input />
        </Form.Item>
        <Form.Item label="Zone">
        <Input />
        </Form.Item>

        <Form.Item label="Property face towards road">
          <Input />
        </Form.Item>
        <Form.Item label="Description">
         <Input />
        </Form.Item>

       <Button type="primary" block style={{ width: "50%"}}>Submit</Button>
      </Form>
      </div>
      </>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;
