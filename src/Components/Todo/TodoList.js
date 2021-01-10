import React, { Component } from 'react'
import {Button, Col, Row, Table, Input} from "antd"
import {connect} from 'react-redux'
import {Link, Redirect } from "react-router-dom"
import {list} from '../../Redux/Actions/TodoAction'
import TodoDelete from './TodoDelete'

const columns = [
    {
        title: "Title",
        dataIndex: "title",
        key: "todoTitle",
        render: text => text,
        width: 250
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "companyDescription",
        render: text => text,
        width: 450
    },
    {
        title: "Author",
        dataIndex: "author",
        key: "todoAuthor",
        render: text => text,
        width: 150
    },
    {
        title: "Action",
        key: "action",
        render: value => (
            <Col>
                <Link to={`task/${value.id}`}>
                    <Button type="primary" size="small" ghost>
                     Edit
                    </Button>
                </Link>
                <TodoDelete campaignId={value.id} />
            </Col>
        ),
        width: 150
    }
]

class TodoList extends Component {
    componentDidMount () {
        this.props.list()
    }

    data() {
        return this.props.data.todo.map(data => {
             data.key = data.id
            return data
        })
    }

    render() {
        
        return (
            <Row>
                <Col>
                    <Table dataSource={this.data()}  columns = {columns} pagination={false} />
                </Col>
            </Row>     
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.todo
    } 
}

const mapDispatchToProps =  {
    list
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)