import React from 'react'
import Input from '../templates/inputsForm'
import Button from '../templates/buttons'

export default props => (
    <div className={'form-to-do'}>
        <h3>Pesquisa e cadastro</h3>
        <form action="" onSubmit={props.onSubimitForm}>
            <Input
                classDiv={'col-xs-12 col-sm-9 col-md-10'}
                idNameInput={'description'}
                typeInput={'text'}
                classInput={'form-control'}
                placeholderInput={'Cadastrar nova tarefa'}
                valueInput={props.descriptionInput}
                onChangeInput={props.handleChange}
            />
            <div className='col-xs-12 col-sm-3 col-md-2'>
                <Button
                    hideButton={false}
                    classDiv={'col-xs-12 col-sm-3 col-md-3'}
                    classButtom={'btn btn-primary'}
                    iconAwesome={'plus'}
                    onClickButton={props.handleAdd}
                />
                <Button
                    hideButton={false}
                    classDiv={'col-xs-12 col-sm-3 col-md-3'}
                    classButtom={'btn btn-info'}
                    iconAwesome={'search'}
                    onClickButton={props.handleSearch}
                />
                <Button
                    hideButton={false}
                    classDiv={'col-xs-12 col-sm-3 col-md-3'}
                    classButtom={'btn btn-default'}
                    iconAwesome={'close'}
                    onClickButton={props.handleClearSearch}
                />
            </div>
        </form>
    </div>
)