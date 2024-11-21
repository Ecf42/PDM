import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'

export default class Busca extends Component {
  state = {
    termoDeBusca: ''
  }
  onTermoAlterado = (event) => {
    console.log(event.target.value)
    this.setState({ termoDeBusca: event.target.value })
  }
  onFormSubmit = (event) => { 
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="flex flex-column border-rounded p-3 border-1">
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText
              value={this.state.termoDeBusca}
              className="w-full text-center"
              placeholder={this.props.dica}
              onChange={this.onTermoAlterado}
            />
          </IconField>
          <Button label="OK" className="p-button-outlined mt-2" />
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
  dica: 'Digite algo que deseja ver...'
}
