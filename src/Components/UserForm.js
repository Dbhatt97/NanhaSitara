/* eslint-disable default-case */
import React, { Component } from 'react';
import Name from './name';
import Pass from './password';
import Mail from './mail';
import Number from './number';
import City from './city'
import gender from './gender'
import age from './age'
import education from './edu'
import vol from './vol'



export class UserForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    password:'',
    email: '',
    number: '',
    city: '',
    gender: '',
    age:'',
    education:''

  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName,password ,email, number,city,gender,age,education } = this.state;
    const values = {firstName, lastName,password, email, number,city,gender,age,education };

    switch (step) {
      case 1:
        return (
          <Name
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Pass
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Mail
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          />
        );
      case 4:
        return <Number
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        handleChange={this.handleChange}
        values={values} />;
    
      case 5:
        return(
            <City
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values} />
            );
        
      case 6:
            return(
                <gender
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values} />
                );

      case 7:
        return(
            <age
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values} />
            );
        
        case 8:
            return(<edu 
            nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values} />);
        
        case 9:
            return(<vol 
            nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values} />
                );
    }
  }
}

export default UserForm;
