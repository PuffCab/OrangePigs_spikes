import React, { Component } from "react";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://rickandmortyapi.com/api/character",
      characters: [],
      error: false,
      foo: false,
    };
    this.changeFoo = this.changeFoo.bind(this);
  }

  async fetchData() {
    try {
      const response = await fetch(this.state.url);
      const data = await response.json();
      console.log("data", data);
      this.setState({ characters: data.results });
    } catch (error) {
      console.log(error);
      this.setState({ error: error });
    }
  }
  changeFoo() {
    console.log("function running");
    this.setState({ foo: !this.state.foo });
  }
  componentDidMount() {
    console.log("this run!");
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component updated!!!");
    console.log("foo", this.state.foo);
    console.log("prev state", prevState.foo);
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <button onClick={this.changeFoo}>Change Boolean</button>
        {this.state.characters.map((character) => {
          return <img key={character.id} src={character.image} alt="" />;
        })}
      </div>
    );
  }
}

export default ClassComponent;
