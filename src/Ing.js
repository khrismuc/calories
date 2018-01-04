import React, { Component } from 'react';
import { Slider } from 'material-ui';

import './Ing.css';

export default class Ing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleChange = (e, newVal) => {
        this.props.updateApp(this.props.id, newVal);
    }

    render = () => {
        return (
            <div className="ingredient">
                <span style={{backgroundColor: this.props.color}}>{this.props.name}</span><br />
                <span>{this.props.amount}g</span>
                <Slider sliderStyle={{marginTop: 10, marginBottom: 10}} min={0} max={this.props.ini * 2} defaultValue={this.props.amount} onChange={this.handleChange} />
            </div>
        );
    }
};