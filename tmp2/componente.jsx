import React, {Component} from 'react'

import Sub from './sub'

export default class Componente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            retorno: {
                combinacoes: [
                    {
                        orgvend: "1",
                        tipovenda: "1"
                    },
                    {
                        orgvend: "2",
                        tipovenda: "2"
                    }
                ],
                tipovenda: [
                    {
                        description: 'Venda 1',
                        pkey: "1"
                    },
                    {
                        description: 'venda 2',
                        pkey: "2"
                    }
                ]

            },
            filter: { description: 'teste'}
        }

        this.getOrgVenda = this.getOrgVenda.bind(this)
        this.getTipoVenda = this.getTipoVenda.bind(this)
    }

    getOrgVenda(event) {
        const org = event.target.value;

        this.getTipoVenda(org)

    }
    getTipoVenda(org) {
        const condicoes = this.state.retorno;

        const filterOgVenda = condicoes.combinacoes.filter(comb => comb.orgvend == org).map(comb => comb.tipovenda);
        const filterTypesVenda = condicoes.tipovenda.filter(venda => filterOgVenda.includes(venda.pkey))[0]
        this.setState({filter: filterTypesVenda});
    };


    render() {
        return(
            <Sub
                orgvenda={this.getOrgVenda}
                tipovenda={this.state.filter}
            />
        )
    }
}