import React from 'react'

export default props => (
    <div className={props.classDiv}>
        <input
            id={props.idNameInput}
            name={props.idNameInput}
            type={props.typeInput}
            className={props.classInput}
            placeholder={props.placeholderInput}
            onChange={props.onChangeInput}
            value={props.valueInput}
        />
    </div>
)