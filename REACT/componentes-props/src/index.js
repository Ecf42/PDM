import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Pedido from './Pedido'
import Cartao from './cartao'
import Feedback from './Feedback'
const App = () => {
  const textoOK = 'Já chegou'
  const textoNOK = 'Ainda não chegou'
  const funcaoOK = () => alert('Agradecemos a confirmação')
  const funcaoNOK = () => alert('Verificamos o ocorrido')
  const componenteFeedback = (
    <Feedback
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )
  return (
    <div className="container border mt-2 py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-5 text-center">Seus pedidos</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-6 col-xl-4 border py-5">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              icone="fa-solid fa-hard-drive fa-shake fa-3x"
              titulo="SSD"
              descricao="SSD Kingston "
            />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-lg-6 col-xl-4 border py-5">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              icone="fa-solid fa-computer-mouse fa-bounce fa-3x"
              titulo="Mouse"
              descricao="Mouse Razer DeathAdder v2 Mini"
            />
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-sm-12 col-lg-6 col-xl-4 border py-5">
          <Cartao cabecalho="22/04/2024">
            <Pedido
              icone="fa-solid fa-keyboard fa-fade fa-3x"
              titulo="Teclado"
              descricao="Teclado Redragon Mithra"
            />
            {componenteFeedback}
          </Cartao>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))


