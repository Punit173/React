import React,{Component} from 'react'


class Classcomp1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }


render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Classcomp1