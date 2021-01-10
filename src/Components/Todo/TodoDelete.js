import React, { Component } from "react"
import { Modal, Button, Row } from "antd"
import TodoService from '../../Services/TodoService'
import ShowToast from '../../Utils/ShowToast'

const {confirm} = Modal

const confirmDelete = (todoId) => {
    confirm({
        title: "Are you sure to delete this company?",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
            TodoService.delete(todoId)
            .then(() => {
                ShowToast("Task is been deleted Successfully", "success")
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
            .catch(() => {
                ShowToast("Couldn't delete Company", "error")
            })
        },
        onCancel() {
            console.log("cancel")
        }
    })
    
}

class TodoDelete extends Component {
    constructor() {
        super()
    }

    render() {
        const {campaignId} = this.props
        console.log(campaignId)
        return(
            <Row>
                <Button onClick={() => confirmDelete(campaignId)}
                type="danger"
                ghost
                style={{ marginLeft: "1rem" }}
                size="small"
                >
                Delete
                </Button>
            </Row>    
        )
    }
}

export default TodoDelete