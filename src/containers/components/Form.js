import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className="pa4 black-80 tc">
          <div className="measure tc">
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name='firstname' required placeholder='First Name'/>
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" name='lastname' required placeholder='Last Name'/>
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="tel" name='number' required placeholder='Number'/>
            <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="email" name='email' required placeholder='Email Address'/>
          </div>
        </form>
      </div>
    )
  }
}
