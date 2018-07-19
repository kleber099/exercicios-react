import React, {Component} from 'react'

import Sub from './sub'

export default class Componente extends Component {

    constructor(props) {
        super(props)

        this.conditionsSales = {
            "codprazo": [
                {
                    "descricao": "20/40 DD",
                    "pkey": "1"
                },
                {
                    "descricao": "35/55 DD",
                    "pkey": "2"
                },
                {
                    "descricao": "A VISTA",
                    "pkey": "3"
                },
                {
                    "descricao": "7/14 DD",
                    "pkey": "4"
                },
                {
                    "descricao": "30 DD",
                    "pkey": "5"
                },
                {
                    "descricao": "10 DD",
                    "pkey": "6"
                },
                {
                    "descricao": "45 DD",
                    "pkey": "7"
                },
                {
                    "descricao": "10/20/30 DD",
                    "pkey": "9"
                },
                {
                    "descricao": "30/60 DD",
                    "pkey": "10"
                },
                {
                    "descricao": "60 DD",
                    "pkey": "11"
                },
                {
                    "descricao": "30/60/90 DD",
                    "pkey": "12"
                },
                {
                    "descricao": "20/30/40 DD",
                    "pkey": "13"
                },
                {
                    "descricao": "30/45/60/75/90 DD",
                    "pkey": "14"
                },
                {
                    "descricao": "30/50/70 DD",
                    "pkey": "15"
                },
                {
                    "descricao": "30/45/60 DD",
                    "pkey": "16"
                },
                {
                    "descricao": "75 DD",
                    "pkey": "17"
                },
                {
                    "descricao": "20/40/60/80 DD",
                    "pkey": "18"
                },
                {
                    "descricao": "15/30 DD",
                    "pkey": "19"
                },
                {
                    "descricao": "30/50/70/90 DD",
                    "pkey": "20"
                },
                {
                    "descricao": "30/45 DD",
                    "pkey": "21"
                },
                {
                    "descricao": "50/70",
                    "pkey": "22"
                },
                {
                    "descricao": "45/60/75 DD",
                    "pkey": "23"
                },
                {
                    "descricao": "15/30/45 DD",
                    "pkey": "25"
                },
                {
                    "descricao": "30 DD BNDES",
                    "pkey": "30"
                },
                {
                    "descricao": "7/14/21 DD",
                    "pkey": "31"
                },
                {
                    "descricao": "30/60/90/120/150 DD",
                    "pkey": "32"
                },
                {
                    "descricao": "30/60/90/120 DD",
                    "pkey": "33"
                },
                {
                    "descricao": "15 DD DOIDINHA",
                    "pkey": "34"
                },
                {
                    "descricao": "30 DD EXPOSITOR",
                    "pkey": "35"
                },
                {
                    "descricao": "30 DD CAMPANHA",
                    "pkey": "36"
                },
                {
                    "descricao": "30/60 DD CAMPANHA",
                    "pkey": "37"
                },
                {
                    "descricao": "30/60/90 DD CAMPANHA",
                    "pkey": "38"
                },
                {
                    "descricao": "20/40 DD EXPOSITOR",
                    "pkey": "39"
                },
                {
                    "descricao": "20/40 DD CAMPANHA ",
                    "pkey": "40"
                },
                {
                    "descricao": "30/45/60 DD CAMPANHA",
                    "pkey": "41"
                },
                {
                    "descricao": "30/45/60/75/90 DD CAMPANHA ",
                    "pkey": "42"
                },
                {
                    "descricao": "30/60/90/120 DD CAMPANHA",
                    "pkey": "43"
                },
                {
                    "descricao": "10/15/20 DD DOIDINHA",
                    "pkey": "46"
                },
                {
                    "descricao": "A VISTA DOIDINHA ",
                    "pkey": "47"
                },
                {
                    "descricao": "30 DD FNE",
                    "pkey": "65"
                },
                {
                    "descricao": "10/20 DD DOIDINHA",
                    "pkey": "68"
                },
                {
                    "descricao": "30 DD CARTAO",
                    "pkey": "72"
                },
                {
                    "descricao": "28 DD KRONA",
                    "pkey": "78"
                },
                {
                    "descricao": "21/28/35 DD KRONA",
                    "pkey": "79"
                },
                {
                    "descricao": "21/35 DD KRONA",
                    "pkey": "80"
                },
                {
                    "descricao": "30/60/90 DD ESPECIAL",
                    "pkey": "81"
                },
                {
                    "descricao": "30/45/60/75/90 DD ESPECIAL",
                    "pkey": "82"
                },
                {
                    "descricao": "30 DD ESPECIAL",
                    "pkey": "84"
                },
                {
                    "descricao": "30/60 DD ESPECIAL",
                    "pkey": "85"
                }
            ],
            "combinacoes": [
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "1",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "2",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "3",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "4",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "5",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "6",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "7",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "9",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "10",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "11",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "12",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "13",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "14",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "15",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "16",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "17",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "18",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "19",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "20",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "21",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "22",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "23",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "25",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "30",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "31",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "32",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "33",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "34",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "35",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "36",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "37",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "38",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "39",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "40",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "41",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "42",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "43",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "46",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "47",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "65",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "68",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "72",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "78",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "79",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "80",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "81",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "82",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "84",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "4",
                    "codprazo": "85",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "6",
                    "codprazo": "3",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "6",
                    "codprazo": "10",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "6",
                    "codprazo": "47",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "1",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "2",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "3",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "4",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "5",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "6",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "7",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "9",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "10",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "11",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "12",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "13",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "14",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "15",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "16",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "17",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "18",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "19",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "20",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "21",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "22",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "23",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "25",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "30",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "31",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "32",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "33",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "34",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "35",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "36",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "37",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "38",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "39",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "40",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "41",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "42",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "43",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "46",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "47",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "65",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "68",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "72",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "78",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "79",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "80",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "81",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "82",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "84",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "9",
                    "codprazo": "85",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "1",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "2",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "3",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "4",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "5",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "6",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "7",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "9",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "10",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "11",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "12",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "13",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "14",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "15",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "16",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "17",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "18",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "19",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "20",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "21",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "22",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "23",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "25",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "30",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "31",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "32",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "33",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "34",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "35",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "36",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "37",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "38",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "39",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "40",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "41",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "42",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "43",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "46",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "47",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "65",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "68",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "72",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "78",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "79",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "80",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "81",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "82",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "84",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                },
                {
                    "codcliente": "1740",
                    "codmeio": "13",
                    "codprazo": "85",
                    "orgvenda": "1",
                    "tabelapreco": "1",
                    "tipovenda": "1"
                }
            ],
            "meios": [
                {
                    "descricao": "COBRANCA BANCARIA",
                    "pkey": "4"
                },
                {
                    "descricao": "CHEQUE EM TRANSITO",
                    "pkey": "6"
                },
                {
                    "descricao": "DINHEIRO EM TRANSITO",
                    "pkey": "9"
                },
                {
                    "descricao": "CARTAO CREDITO",
                    "pkey": "13"
                }
            ],
            "orgvenda": [
                {
                    "descricao": "1 - RAMACON DIST DE MAT. P/ CONST. LTDA ME",
                    "pkey": "1"
                }
            ],
            "tabelapreco": [
                {
                    "descricao": "1 - CE",
                    "pkey": "1"
                }
            ],
            "tipovenda": [
                {
                    "descricao": "TV-1",
                    "pkey": "1"
                }
            ]
        };

        this.state = {
            listTypeSale: [],
            listMeioSale: [],
            listPrazoSale: []
        }

        const listTypeSale = this.getTypeSale(this.conditionsSales)
        const firstTypeSale = listTypeSale[0];

        const listMeioSale = this.getMeiosSale(this.conditionsSales, firstTypeSale);
        const firstMeioSale = listMeioSale[0];

        const listPrazoSale = this.getPrazosSale(this.conditionsSales, firstTypeSale, firstMeioSale)

        this.setState({
            listTypeSale: listTypeSale,
            listMeioSale: listMeioSale,
            listPrazoSale: listPrazoSale
        });

        console.log(listTypeSale, listMeioSale, listPrazoSale);
    }

    getTypeSale(conditionsSales) {
        const typesSaleCombine = conditionsSales.combinacoes.filter(comb => comb.orgvenda == '1').map(comb => comb.tipovenda);
        const typeSales = conditionsSales.tipovenda.filter(tipo => typesSaleCombine.includes(tipo.pkey));

        return typeSales.map(sale => ({label: sale.descricao, value: sale.pkey}));
    }

    getMeiosSale(conditionsSales, typeSale) {
        const typesMeioCombine = conditionsSales.combinacoes
                                        .filter(comb => comb.orgvenda == '1' && comb.tipovenda == typeSale.value)
                                        .map(comb => comb.codmeio);

        const typeMeios = conditionsSales.meios.filter(meio => typesMeioCombine.includes(meio.pkey));

        return typeMeios.map(meio => ({label: meio.descricao, value: meio.pkey}));
    }

    getPrazosSale(conditionsSales, typeSale, meioSale) {
        const prazoCombine = conditionsSales.combinacoes
            .filter(comb => comb.orgvenda == '1' && comb.tipovenda == typeSale.value && comb.codmeio == meioSale.value)
            .map(comb => comb.codprazo);

        const prazos = conditionsSales.codprazo.filter(prazo => prazoCombine.includes(prazo.pkey));

        return prazos.map(prazo => ({label: prazo.descricao, value: prazo.pkey}));
    }


    render() {
        return(
            <div>
                Teste
            </div>
        )
    }
}