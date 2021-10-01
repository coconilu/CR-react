import React from "react";

class HelloApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alpha",
    };
  }

  onClick = () => {
    this.setState({
      name: this.props.name,
    });
  };

  render() {
    return <div onClick={this.onClick}>Hello {this.state.name}</div>;
  }
}

export default HelloApp;
