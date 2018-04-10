import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { markAsDone, markAsPending, remove } from '../redux/todoApp/todoAppReducer';

import Button from './buttons';

const TodoList = props => {
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
                        classButton={'btn btn-danger'}
                        iconAwesome={'trash-o'}
                        onClickButton={() => props.remove(todo)}
                    />
                    <Button
                        classDiv={'col-xs-12 col-sm-5 col-md-5'}
                        hideButton={todo.done}
                        classButton={'btn btn-success'}
                        iconAwesome={'check'}
                        onClickButton={() => props.markAsDone(todo)}
                    />
                    <Button
                        classDiv={'col-xs-12 col-sm-5 col-md-5'}
                        hideButton={!todo.done}
                        classButton={'btn btn-warning'}
                        iconAwesome={'undo'}
                        onClickButton={() => props.markAsPending(todo)}
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

const mapStateToProps = (state) => ({ list: state.todo.list })
const mapDispatchToProps = (dispatch) => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)