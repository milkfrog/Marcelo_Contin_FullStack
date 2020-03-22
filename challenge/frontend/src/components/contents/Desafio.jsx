import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery'
import './Desafio.css'


const baseUrl = 'http://localhost:4002/divisores'
const initialState = {
    values: { 
        number: '',
        listDividers: [],
        isPrime: ''
    }
}


export default class Desafio extends Component {
    state = { ...initialState }

    save() {
        const values = this.state.values
        const url = baseUrl
        console.log($.param(values))
        axios.post(url, $.param(values))
            .then(resp => {
                console.log(resp.data.prime)
                console.log(resp.data.dividers)
                const values = { ...this.state.values}
                values.isPrime = resp.data.prime
                values.listDividers = resp.data.dividers
                this.setState({ values })
                console.log(this.state.values)
            })
    }

    updateNumber(event) {
        const values = { ...this.state.values}
        values[event.target.name] = event.target.value
        this.setState({ values })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Número</label>
                            <input type="text" className="form-control" 
                                name="number"
                                value={this.state.number}
                                onChange={e => this.updateNumber(e)}
                                placeholder="Digite o número Inteiro"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>É primo?</label>
                            <input type="text" className="form-control readonly"
                                name="prime"
                                value={this.state.values.isPrime}
                                placeholder="É Primo?"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label>Lista de divisores</label>
                            <input type="text" className="form-control readonly"
                                name="dividers"
                                value={this.state.values.listDividers}
                                placeholder="Lista de divisores"/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Verificar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <main>
                <div className="container">
                    <h1 className="mt-5">Pesquisa</h1>
                    <p>Entre com um número inteiro para descobrir seus divisores e se ele é um número primo</p>
                    {this.renderForm()}
                    <h1>Histórico de Pesquisas</h1>
                </div>
            </main>
        )
    }
}