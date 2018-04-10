import React from 'react'

export default props => {
    if (!props.hideButton) {
        return (
            <div className={props.classDiv}>
                <button className={props.classButtom} onClick={props.onClickButton}>
                    <i className={'fa fa-' + props.iconAwesome}></i>
                </button>
            </div>
        )
    }

    return null
}