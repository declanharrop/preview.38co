import React, { Component } from 'react';

export default class FormSection extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      email: '',
      message: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleNumberChange = (event) => {
    this.setState({number: event.target.value})
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  handleMessageChange = (event) => {
    this.setState({message: event.target.value})
  }

  handleSubmit = () => {

  }

  render() {
    return(
      <form name='Contact' method='POST' netlify>
        <div>
          <input
            className='w-100 tc h2 pv2 mv2' 
            id='name'
            type='text'
            name='name'
            placeholder='Name' 
            value={this.state.name} 
            onChange={this.handleNameChange}
            required
          />
        </div>

        <div>
          <input
            className='w-100 tc h2 pv2 mv2' 
            id='number'
            type='tel'
            name='number'
            placeholder='Number' 
            value={this.state.number} 
            onChange={this.handleNumberChange}
            required
          />
        </div>

        <div>
          <input
            className='w-100 tc h2 pv2 mv2' 
            id='email'
            type='email'
            name='email'
            placeholder='Email Address' 
            value={this.state.email} 
            onChange={this.handleEmailChange}
            required
          />
        </div>

        <div>
          <input
            className='w-100 tc h2 pv5 mv2'
            id='message' 
            type="text"
            name='message'
            placeholder='Let us know what you need'
            value={this.state.message}
            onChange={this.handleMessageChange}
            required
          />
        </div>

        <div>
          <input
            className='tc center'
            onClick={this.handleSubmit}
            type='submit'
            value='submit'
          />
        </div>
        
      </form>
    )
  }
}