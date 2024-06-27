import React, { Component } from 'react';

class Classcomp2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Praveen"
        };
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({ name: "Pankaj" });
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <button onClick={this.update}>
                    Increment
                </button>
            </div>
        );
    }
}

export default Classcomp2;
