import React from 'react';
import ProdutoService from '../../app/produtoService';
import { Link } from 'react-router-dom';

const estadoInicial = {
  nome: '',
  sku: '',
  descricao: '',
  preco: 0,
  fornecedor: '',
  sucesso: false,
  errors: []
}

export default class CadastroProduto extends React.Component{

    state = estadoInicial;

        // Instanciação do ProdutoService(Onde esta toda a logica (cadastro,consulta, etc))
    constructor(){
      super()
      this.service = new ProdutoService();
    }

    onChange = (event) => {
      const valor = event.target.value
      const nomeDoCampo = event.target.name
      this.setState({ [nomeDoCampo] : valor })
    }

    onSubmit = (event) => {
      const produto = {
        nome: this.state.nome,
        sku: this.state.sku,
        descricao: this.state.descricao,
        preco:this.state.preco,
        fornecedor: this.state.fornecedor
      }
      try{
      this.service.salvar(produto)
      this.limpaCampos()
      this.setState({sucesso: true})
    }
    catch(erro){
      const erros = erro.errors;
      this.setState({ errors: erros})
    }

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

                    { this.state.errors.length > 0 &&
                        this.state.errors.map(
                          msg => {
                            return(
                              <div class="alert alert-dismissible alert-danger">
                                  <button type="button" class="close" data-dismiss="alert">&times;</button>
                                  <strong>Erro!</strong> 
                                    {msg}
                              </div>
                            )
                          }
                        )                                                             
                    }

              
                  { this.state.sucesso ?
                        <div class="alert alert-dismissible alert-success">
                          <button onClick={() =>{
                            this.setState({sucesso: false})
                          }} type="button" class="close" data-dismiss="alert">&times;</button>
                          <strong>Pronto!</strong> Cadastro realizado com sucesso! <Link to="/consulta-produtos" class="alert-link">Ver produtos cadastrados!</Link>.
                        </div>
                        :
                        null
                    }
                 


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