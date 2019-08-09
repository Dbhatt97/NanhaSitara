import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Name extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
      <MuiThemeProvider>
       <React.Fragment>
       <AppBar/>
       <h1>What do we call<br/>you?</h1>
       <br/>
       <TextField
            hintText="First Name"
            floatingLabelText="First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br/>
           <RaisedButton
            label="Next"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          </React.Fragment>
      </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
    button: {
      margin: 15
    }
  };

export default Name;
