import React from 'react'

export default props => (
  <>
    <div className="d-flex align-items-center">
      <i class={props.icone}></i>
    </div>
    <div className="flex-grow-1 border ms-2">
      <h4 className="text-center">{props.titulo}</h4>
      <p className="text-center">{props.descricao}</p>
    </div>
  </>
)
