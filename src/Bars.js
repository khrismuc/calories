import React, { Component } from 'react';
import Data from './Data';
import Colors from './Colors';

import './Bars.css';

class Bar extends Component {
    render = () => {
        const style = {
            backgroundColor: this.props.color,
            width: (100 * this.props.width) + "%"
        };
        return (
            <div className="bar" style={style} />
        );
    }
}

export default class Bars extends Component {

    goals = [2000, 230, 73, 45]

    render = () => {

        var sum = Data.statNames.map(i => 0);

        const stats = Data.statNames.map((name, i) => {
            const goal = this.goals[i];
            return Data.ingredients.map((ing, j) => {
                const w = ing.stats[i] * this.props.amounts[j] / goal;
                sum[i] += w * goal;
                return (<Bar
                    key={i * Data.statNames.length + j}
                    color={Colors[j] || "grey"}
                    width={w}
                />);
            });
        });

        return (
            <table id="bars">
                <tbody>
                    {Data.statNames.map((name, i) => <tr key={i}>
                        <td>{name} ({Math.round(sum[i])}/{this.goals[i]}):</td>
                        <td>
                            <div className="bargroup">{stats[i]}</div>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        );
    }

}