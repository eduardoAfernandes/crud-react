import React from 'react';

export default class CadastroProduto extends React.Component{

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
                              <input type="text"  className="form-control" />

                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                              <label>SKU: *</label>
                              <input type="text"  className="form-control" />

                            </div>
                          </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                              <label>Preço: *</label>
                              <input type="text"  className="form-control" />

                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                              <label>Fornecedor: *</label>
                              <input type="text"  className="form-control" />

                            </div>
                          </div>
                      </div>


                      <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                              <label>Descrição: *</label>
                              <textarea class="form-control" rows="3"></textarea>

                            </div>
                        </div>                       
                      </div>

                      <div className="row">
                        <div className="col-md-1">
                           <button  class="btn btn-success">Salvar</button>
                        </div>

                        <div className="col-md-1">
                           <button  class="btn btn-danger">Limpar</button>
                        </div>
                      </div>
                      
                 </div>
          </div>
        )
    }
}