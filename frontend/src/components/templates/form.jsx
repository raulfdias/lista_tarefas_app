import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeDescription, search, add, clear } from '../redux/todoApp/todoAppReducer';

import Input from '../templates/inputsForm';
import Button from '../templates/buttons';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    componentWillMount() {
        this.props.search();
    }

    onSubmitForm(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        // Extração de dados com o destructuring
        const { add, search, descriptionInput } = this.props;

        return (
            <div className={'form-to-do'}>
                <h3>Pesquisa e cadastro</h3>
                <form action="" onSubmit={this.onSubmitForm}>
                    <Input
                        classDiv={'col-xs-12 col-sm-9 col-md-10'}
                        idNameInput={'description'}
                        typeInput={'text'}
                        classInput={'form-control'}
                        placeholderInput={'Cadastrar nova tarefa'}
                        valueInput={this.props.descriptionInput}
                        onChangeInput={this.props.changeDescription}
                    />
                    <div className='col-xs-12 col-sm-3 col-md-2'>
                        <Button
                            hideButton={false}
                            classDiv={'col-xs-12 col-sm-3 col-md-3'}
                            classButton={'btn btn-primary'}
                            iconAwesome={'plus'}
                            onClickButton={() => add(descriptionInput)}
                        />
                        <Button
                            hideButton={false}
                            classDiv={'col-xs-12 col-sm-3 col-md-3'}
                            classButton={'btn btn-info'}
                            iconAwesome={'search'}
                            onClickButton={() => search(descriptionInput)}
                        />
                        <Button
                            hideButton={false}
                            classDiv={'col-xs-12 col-sm-3 col-md-3'}
                            classButton={'btn btn-default'}
                            iconAwesome={'close'}
                            onClickButton={this.props.clear}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ descriptionInput: state.todo.description });
const mapDispachToProps = (dispach) => bindActionCreators({ changeDescription, search, add, clear }, dispach)
export default connect(mapStateToProps, mapDispachToProps)(TodoForm)