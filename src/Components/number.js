import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { colors } from 'material-ui/styles';
import { grey100 } from 'material-ui/styles/colors';
import { blueGrey100 } from 'material-ui/styles/colors';

class Number extends Component {
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
        <h1>How can we reach <br/>you?</h1>
        <br/><br/><br/>
        <p style={styles.p}>Don't worry, we won't spam you.</p>
        <TextField
            hintText="Enter Number"
            floatingLabelText="Phone Number"
            onChange={handleChange('number')}
            defaultValue={values.number}/>
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
    },
    p: {
        margin: '30px',
        fontWeight: 'low',
        color: blueGrey100
      }
  };
export default Number;
