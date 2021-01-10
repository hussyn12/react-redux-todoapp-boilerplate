import React, {Component} from "react"
import {connect} from "react-redux"
import {Button, Col, Row, Form, Input, Typography, Select} from "antd"
import {create, update} from '../../Redux/Actions/TodoAction'
import {Redirect} from "react-router-dom"

const {Title} = Typography
const {TextArea} = Input
const {Option} = Select
const optionList = ["Done", "Pending"]

class TodoForm extends Component {
    constructor () {
        super()
        this.state = {
            title: "",
            desc: "",
            author: "",
            status: [],
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleStatus = status => {
        this.setState({ status })
    }

    handleSubmit = e => {
        e.preventDefault()

        const newTodo = {
            title: this.state.title,
            desc: this.state.desc,
            author: this.state.author,
            status: this.state.status
        }
        if(this.props.mode === "create") {
            this.props.register(newTodo)
        } else {
            this.props.edit(this.props.todoId, this.state)
        }
    }

    render() {
        const statusList = optionList.map((option, k) => {
          return <Option key={option}>{option}</Option>
        })
        return (
            <Row>
                <Col span={24}>
                    <Form>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Title level={3}> Task Details </Title>
                            </Col>
                            <Col span={12}>
                                <Form.Item 
                                label="Title"
                                name="title"
                                rules={[
                                    {
                                        require: true,
                                        message: "Please Enter the Title"
                                    }
                                    ]}>
                                        <input value={this.state.title} onChange={e => this.onChange(e)} placeholder="title" />
                                </Form.Item>
                                <Form.Item 
                                label="Description"
                                name="desc"
                                rules={[
                                    {
                                        require: true,
                                        message: "Please Enter the Description"
                                    }
                                    ]}>
                                        <TextArea value={this.state.desc} onChange={e => this.onChange(e)} row={4} placeholder="Description" />
                                </Form.Item>
                                <Form.Item 
                                label="Author"
                                name="author"
                                rules={[
                                    {
                                        require: true,
                                        message: "Please Enter the Author"
                                    }
                                    ]}>
                                        <input value={this.state.author} onChange={e => this.onChange(e)} placeholder="Author" />
                                </Form.Item>
                                <Form.Item 
                                label="Status"
                                name="status"
                                rules={[
                                    {
                                        require: true,
                                        message: "Please Enter the Status"
                                    }
                                    ]}>
                                        <Select placeholder="Select Status" value={this.state.status} onChange={this.handleStatus} style={{width: "80%"}} >
                                            {statusList}
                                        </Select>    
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Item>
                                <Button type="primary" onClick={e => this.handleSubmit(e)} htmlType="submit">
                                    {this.props.isAuthenticated ? <Redirect to="/task"/> : null}
                                    Submit
                                </Button>
                            </Form.Item>
                        </Row>  
                    </Form>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = state => ({
    todo: state.todo
})
  
const mapDispatchToProps = dispatch => {
    return {
      register: data => dispatch(create(data)),
      edit: (id, data) => dispatch(update(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)