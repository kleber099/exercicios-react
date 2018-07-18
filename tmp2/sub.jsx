import React, {Component} from 'react'

export default class Sub extends Component {

    render() {
        return (
            <div>

                <select onChange={this.props.orgvenda}>
                    <option value="1">Venda 1</option>
                    <option value="2">Venda 2</option>
                </select>
                {this.props.tipovenda.description}
            </div>
        );
    }
}
