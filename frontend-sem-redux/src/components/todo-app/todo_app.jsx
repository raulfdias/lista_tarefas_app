import React from 'react'
import Axios from 'axios'

import PageHeader from '../templates/page_header'
import Form from '../templates/form'
import List from '../templates/list'

const URL = 'http://localhost:3003/api/todos'

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleRemoveToDo = this.handleRemoveToDo.bind(this)
        this.handleRestartToDo = this.handleRestartToDo.bind(this)
        this.handleFinishToDo = this.handleFinishToDo.bind(this)
        this.handleSearchToDo = this.handleSearchToDo.bind(this)
        this.handleClearSearch = this.handleClearSearch.bind(this)

        this.reloadList()
    }

    reloadList(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''

        Axios.get(`${URL}?sort=-createAt${search}`).then(
            res =>this.setState({ ...this.state, description, list: res.data })            
        )
    }

    handleFormSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ ...this.state, description: event.target.value })
        // console.log(this.state.description)
        // console.log(description)
    }

    handleAdd() {
        Axios.post(URL, { description: this.state.description }).then(
            res => this.reloadList()
        )
    }

    handleRemoveToDo(id) {
        Axios.delete(`${URL}/${id}`).then(res => this.reloadList(this.state.description))
    }

    handleRestartToDo(id) {
        Axios.put(`${URL}/${id}`, { done: false }).then(res => this.reloadList(this.state.description))
    }

    handleFinishToDo(id) {
        Axios.put(`${URL}/${id}`, { done: true }).then(res => this.reloadList(this.state.description))
    }

    handleSearchToDo() {
        this.reloadList(this.state.description)
    }

    handleClearSearch() {
        this.reloadList()
    }

    render() {
        return (
            <div>
                <PageHeader
                    name='Tarefas'
                    small='Cadastro'
                />
                <Form
                    onSubimitForm={this.handleFormSubmit}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearchToDo}
                    handleClearSearch={this.handleClearSearch}
                    descriptionInput={this.state.description}
                />
                <List
                    list={this.state.list}
                    removeToDo={this.handleRemoveToDo}
                    finishToDo={this.handleFinishToDo}
                    restartToDO={this.handleRestartToDo}
                />
            </div>
        )
    }
}
