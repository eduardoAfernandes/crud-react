import React from 'react';

const estadoInicial = {
  nome: '',
  sku: '',
  descricao: '',
  preco: 0,
  fornecedor: ''
}

export default class CadastroProduto extends React.Component{

    state = estadoInicial;

    onChange = (event) => {
      const valor = event.target.value
      const nomeDoCampo = event.target.name
      this.setState({ [nomeDoCampo] : valor })
    }

    onSubmit = (event) => {
      console.log(this.state)
    }

    limpaCampos = () => {
      this.setState(estadoInicial)
    }


    render(){
        return(
            <div class="card text-white bg-primary mb-3">
                <div class="card-header mt-3 pt-3">
                  <h4 className="text-center">Cadastro de Produtos</h4>
                  </div>
                    <div class="card-body">
                      <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                              <label>Nome: *</label>
                              <input  name="nome" 
                              onChange={this.onChange}
                              type="text" value={this.state.nome} 
                              className="form-control" />

                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                              <label>SKU: *</label>
                              <input name="sku" type="text"  
                              onChange={this.onChange}
                              value={this.state.sku} className="form-control" />

                            </div>
                          </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                              <label>Preço: *</label>
                              <input name="preco" 
                              onChange={this.onChange}
                              type="text"  value={this.state.preco}  className="form-control" />

                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                              <label>Fornecedor: *</label>
                              <input name="fornecedor" 
                              onChange={this.onChange}
                              type="text"  value={this.state.fornecedor} 
                              className="form-control" />

                            </div>
                          </div>
                      </div>


                      <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                              <label>Descrição: *</label>
                              <textarea name="descricao"
                                onChange={this.onChange}
                               class="form-control"   
                               value={this.state.descricao} 
                               rows="3"></textarea>

                            </div>
                        </div>                       
                      </div>

                      <div className="row">
                        <div className="col-6">
                           <button onClick={this.onSubmit} class="btn btn-success">Salvar</button>
                        </div>

                        <div className="col-6">
                           <button onClick={this.limpaCampos} class="btn btn-danger">Limpar</button>
                        </div>
                      </div>
                      
                 </div>
          </div>
        )
    }
}