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
    },
    list: []
}


export default class Desafio extends Component {
    state = { ...initialState }

    save() {
        const values = this.state.values
        const url = baseUrl
        axios.post(url, $.param(values))
            .then(resp => {
                const values = { ...this.state.values}
                values.isPrime = resp.data.prime
                values.listDividers = resp.data.dividers
                this.setState({ values })
                axios.get(url).then(resp2 => {
                    this.setState({ list: resp2.data })
                })
            })
    }

    updateField(event) {
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
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o número Inteiro"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>É primo?</label>
                            <input type="text" className="form-control readonly"
                                name="isPrime"
                                value={this.state.values.isPrime}
                                onChange={e => null}
                                placeholder="É Primo?"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="form-group">
                            <label>Lista de divisores</label>
                            <input type="text" className="form-control readonly"
                                name="listDividers"
                                onChange={e => null}
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

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Número</th>
                        <th>É Primo?</th>
                        <th>Divisores</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(valor => {
            return (
                <tr key={valor.id}>
                    <td>{valor.number}</td>
                    <td>{valor.prime ? 'true': 'false'}</td>
                    <td>{valor.dividers}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <main>
                <div className="container">
                    <h1 className="mt-5">Pesquisa</h1>
                    <p>Entre com um número inteiro para descobrir seus divisores e se ele é um número primo</p>
                    {this.renderForm()}
                    <h1>Histórico de Pesquisas</h1>
                    {this.renderTable()}
                </div>
            </main>
        )
    }
}