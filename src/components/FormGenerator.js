import React, { Component } from 'react';
import '../assets/Style.css';
import { FormData } from '../data/Form';
import InputElement from './InputElement';

class FormGenerator extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {

  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    return this.state;
  }

  handleInputChange(e) {
    let obj = {};
    let name = e.target.name;
    obj[name] = e.target.value;
    this.setState(obj);
  }

  render() {
    let elements = [];
    let state = this.state;

    FormData.forEach((element, index) => {
      let visible = true;
      let { conditional } = element;

      if (conditional && conditional.name && conditional.show_if){
        let cond_value = new Date(this.state[conditional.name]);
        visible = conditional.show_if(cond_value);
      }

      elements.push(<InputElement
          key={index} element={element}
          value={state[element.name]}
          visible={visible}
          onChange={this.handleInputChange} />)
    })

    return (
      <div className='Main-container'>
        <div className='Form-container'>
          <form onSubmit={this.handleSubmit}>
            {elements}
            <div className='Button-container'>
              <button className='Button'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default FormGenerator;
