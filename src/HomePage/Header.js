import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import Avatar from '@material-ui/core/Avatar'
import '../App.css'
import {red} from '@material-ui/core/colors';
import Card from '@material-ui/core/Card'

class Header extends Component {
  render() {
  
     return (
      <div>
        <MuiThemeProvider>
              <div style = {{paddingTop:20,paddingLeft:25}}>
                <Button
                  style={styles.button}>Events
                    </Button>
                    <Avatar style={styles.Avatar} src ="data:image/jpeg;base64,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">
                    </Avatar>
              </div>
                <div>
                    <h1 style={styles.Text1}>
                       13 july 2019
                    </h1>
                    <h1 style={styles.Text2}>
                      Hello,User
                      </h1>
                </div>

                <div style={styles.Box}>
                  <Card style={styles.Card1}>
                      <h1 style={{color:"#FFFFFF",
                       marginLeft:"5%",marginTop:"5%",
                       fontFamily:"BebasNeue"}} >Read Our<br/> Story</h1>
                  </Card>

                  <Card style={styles.Card2}>
                      <h1 style={{color:"#FFFFFF",
                       marginLeft:"5%",marginTop:"5%",
                       fontFamily:"Bebas Neue"}} >Check<br/>Events</h1>
                  </Card>
                  
                  <Card style={styles.Card3}>
                      <h1 style={{color:"#FFFFFF",
                       marginLeft:"5%",marginTop:"5%",
                       fontFamily:"Bebas Neue"}} >Check Our<br/>Centers</h1>
                  </Card>
                </div>
                <br/>
                  <h1 style={{fontSize:11,display: 'flex', justifyContent: 'center'}}>"Give a man a fish and you feed him for a day.<br/> 
                  Teach a man to fish and you feed him for a lifetime."
                  </h1>
                  <br/>
                <div style={{display: 'flex', justifyContent: 'center'}}>       
                  <Button
                  style={styles.ButtonVol}>Become a Volunteer
                  </Button>
                    </div>
        </MuiThemeProvider>     
      </div>
    )
  }
}
const styles = {
  button:{
  backgroundColor:red, 
  height:33,width:91, 
  fontSize:14,
  fontWeight:"bold",
  marginTop: 15,
  color:"#FFFFFF",
  borderRadius: 50,
},
  ButtonVol:{
    backgroundColor:"#7CDBD5",
    color:"#FFFFFF",
    fontWeight: 'bold',
    borderRadius:50,
    display: 'block',
  },
  Avatar:{
    height:50,
    width:50,
    float:"right",
    marginRight: 20,
    marginBottom: 40,
  },
  Card1:{
    height:176,
    width:274,
    display: 'flex',
    backgroundColor:"#F9BE02",
    marginLeft:"10%",
    borderRadius: "5%",
    flexShrink: 0,
  },
  
  Card2:{
    height:176,
    width:274,
    display: 'flex',
    backgroundColor:"#F53240",
    marginLeft:"10%",
    borderRadius: "5%",
    flexShrink: 0,
  },
  
  Card3:{
    height:176,
    width:274,
    display: 'flex',
    backgroundColor:"#02C470",
    marginLeft:"10%",
    borderRadius: "5%",
    flexShrink: 0,
  },
  Text1:{
      fontSize:10,
      marginLeft:"10%",
      marginTop:"10%",
  },
  Text2:{
    fontSize:22,
    marginTop:"1%",
    marginLeft:"10%" ,
  },
  Box:{
    display: 'flex',
    overflowX:"auto",
    overflowY:"hidden",
  },
};
export default Header;
