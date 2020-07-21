import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {length:'', input:'', Chars:'', inputArr:[]};
    }

    onChangeHandler = (e) => {

        const charArr = e.target.value.split('');

        this.setState({
            inputArr:e.target.value.split(''),
            length:e.target.value.length,
            Chars:(
                <div className="characters">
                    {this.state.inputArr.map((char,index) => {
                        return <CharComponent
                            char={this.state.inputArr[index]}
                            click={() => this.deleteHandler(index)}
                        ></CharComponent>
                    })}
                </div>
            )
        });
        
    }

    deleteHandler = (index) => {
        const newArr = [...this.state.inputArr];
        newArr.splice(index, 1);
        this.setState({
            inputArr: newArr,
            Chars:(
                <div className="characters">
                    {this.state.inputArr.map((char,index) => {
                        return <CharComponent
                            char={this.state.inputArr[index]}
                            click={() => this.deleteHandler(index)}
                        ></CharComponent>
                    })}
                </div>
            )
        })
    }

  render() {

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <div className="input">
            <input type = 'text' placeholder="type here" onChange = { this.onChangeHandler }></input>
            <p className='inputLength'>Number of Characters: { this.state.length }</p>
            <ValidationComponent length={ this.state.length }>Validation:</ValidationComponent>
            
            <div>{this.state.Chars}</div>
            <h6>{ this.state.inputArr }</h6>
            <h6>{ this.state.inputArr.length }</h6>
        </div>

      </div>
    );
  }
}

export default App;
