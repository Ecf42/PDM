import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class estacaoClimatica extends Component {

	timer = null

	state = {
		data: null
	}

	componentDidMount()		{
		this.timer = setInterval(() => {
			const data = new Date()
			console.log(data.toLocaleString())
			this.setState({data:data})
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
  	}
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div
            className="d-flex align-items-center"
            style={{ height: '6 rem' }}>
            <i className={`fa-5x ${this.props.icone}`}></i>
            <p className="w-75 ms-3 text-center fs-1">{this.props.estacao}</p>
          </div>
          <p className="text-center">
            {
							this.props.latitude ?
              	`Coords: ${this.props.latitude}, ${this.props.longitude}, Date: ${this.state.data}`
              : 
							this.props.mensagemDeErro ?
              		this.props.mensagemDeErro
              		: 
									'Clique no botão para saber sua estação climática'}
          </p>
          <button
            onClick={this.props.obterLocalizacao}
            className="btn btn-outline-primary w-100 mt-2"
          >
            Qual a minha estação?
          </button>
          <button
            onClick={() => {
              ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
            }}
            className="btn btn-outline-danger w-100 mt-2"
          >
            Unmount
          </button>
        </div>
      </div>
    )
  }
}
