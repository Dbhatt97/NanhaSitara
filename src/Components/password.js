import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Pass extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MuiThemeProvider>
        <React.Fragment>
        <AppBar/>
        <br/>
            <h1>Please enter a <br/> password</h1>
            <TextField
            hintText="Enter Password"
            floatingLabelText="Password"
            onChange={handleChange('password')}
            defaultValue={values.password}/>
            <br/>
             <TextField
            hintText="Confirm Password"
            floatingLabelText="Confirm Password"
            onChange={handleChange('password')}
            defaultValue={values.password}/>
            <br/>
            
           <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
           <RaisedButton
            label="Next"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          </React.Fragment>
        </MuiThemeProvider>
        
      </div>
    )
  }
}

const styles = {
    button: {
      margin: 15
    }
  };
export default Pass;
