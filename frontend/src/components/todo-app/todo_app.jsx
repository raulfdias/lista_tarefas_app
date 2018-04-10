import React from 'react'
import Axios from 'axios'

import PageHeader from '../templates/page_header'
import Form from '../templates/form'
import List from '../templates/list'

const URL = 'http://localhost:3003/api/todos'

export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <PageHeader
                    name='Tarefas'
                    small='Cadastro'
                />
                <Form />
                <List />
            </div>
        )
    }
}
