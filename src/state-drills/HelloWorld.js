import React from "react";

class Hello extends React.Component {
  state = {
      who: ''
  };

handleButtonClick = (btnString) => {
    this.setState({who: btnString})
}

  
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button className="world" onClick={() => this.handleButtonClick("World!")} > World</button>
        <button className="react" onClick={() => this.handleButtonClick("React!")}>React</button>
        <button className="friend" onClick={() => this.handleButtonClick("Friend!")}>Friend</button>
        <button className="empty" onClick={() => this.handleButtonClick('')}>Clear</button>
      </div>
    );
  }
}

export default Hello;
