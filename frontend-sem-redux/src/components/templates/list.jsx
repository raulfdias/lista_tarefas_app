import React from 'react'
import Button from './buttons'

export default props => {
    const renderRows = () => {
        let list = props.list || []

        return list.map((todo) => (
            <tr key={todo._id}>
                <td className={todo.done ? 'marked' : ''}>
                    {todo.description}
                </td>
                <td>
                    <Button
                        classDiv={'col-xs-12 col-sm-5 col-md-5'}
                        hideButton={!todo.done}
                        classButtom={'btn btn-danger'}
                        iconAwesome={'trash-o'}
                        onClickButton={()=>props.removeToDo(todo._id)}
                    />
                    <Button
                        classDiv={'col-xs-12 col-sm-5 col-md-5'}
                        hideButton={todo.done}
                        classButtom={'btn btn-success'}
                        iconAwesome={'check'}
                        onClickButton={()=>props.finishToDo(todo._id)}
                    />
                    <Button
                        classDiv={'col-xs-12 col-sm-5 col-md-5'}
                        hideButton={!todo.done}
                        classButtom={'btn btn-warning'}
                        iconAwesome={'undo'}
                        onClickButton={()=>props.restartToDO(todo._id)}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <div className={'list-to-do'}>
            <h3>Lista de Tarefas</h3>
            <table className='table table-responsive table-list-to-do'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}
