import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import Avatar from '@material-ui/core/Avatar'
class ComponentName extends Component {
  render() {
    return (
      <div style={{width:'100%'}}>
      <MuiThemeProvider>
      <br/>
        <div style={{display:'block',float:'left',marginLeft:'5%',marginRight:'10%'}}>
         <h1 style={{fontStyle:'ProductSans', fontSize:20,
         fontWeight:'bold'}}>Featured Volunteers</h1>
         <div style={{ display:'flex',width:'20%' 
         ,width:"350px",height:'110px'}}> 
           
            <div style={styles.divVol}>
            <Avatar style={styles.Avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53xhQQEUj7hgl-Z7iizTqEAOYucSmHVzO3i4861oLFd97KOWTdg">
            </Avatar>
            <h1 style={styles.Name}>Jessica Smith</h1>
             </div>

             <div style={styles.divVol}>
            <Avatar style={styles.Avatar} src="https://www.w3schools.com/w3images/avatar2.png">
            </Avatar>
            <h1 style={styles.Name}>Will Thompson</h1>
             </div>

             <div style={styles.divVol}>
            <Avatar style={styles.Avatar} src="https://profilepicturesdp.com/wp-content/uploads/2018/07/profile-pictures-avatars-4.png">
            </Avatar>
            <h1 style={styles.Name}>Adam Hugo</h1>
            </div>
         </div>
        </div>

         <div style={{display:'block',float:'right',marginRight:'10%'}}>
         <h1 style={{fontStyle:'ProductSans', fontSize:20,
         fontWeight:'bold', marginLeft:"10%"}}>Featured Centers</h1>
            
         <div style={{ display:'flex',width:'20%' ,marginLeft:'10%'
              ,width:"350px",height:'110px',}}> 
           
              <div style={styles.divVol}>
                <Avatar style={styles.Avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVjKRcrLFHGijJ1-0e5Re-tPtm16S3NN8-_M_lKDSX0FAr64Tm">
                </Avatar>
                <h1 style={styles.Name}>Maple Ridge</h1>
              </div>

              <div style={styles.divVol}>
                <Avatar style={styles.Avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngc9OxuXhgAd6dp-ahvJ4W9YYqZrUenMvxHSVFjDlodcU2ttjKw">
                </Avatar>
                <h1 style={styles.Name}>Willow Creek</h1>
               </div>

             <div style={styles.divVol}>
              <Avatar style={styles.Avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dXKKpITPTdhuSKGKcEG0LFag2ewHb213K88n4_ppIkMaTvmhWw">
              </Avatar>
              <h1 style={styles.Name}>Silver Oak</h1>
             </div>

          </div>
          </div>
         </MuiThemeProvider>
      </div>
    )
  }
}

const styles = {

    Avatar:{
        marginLeft: "10px",
        width:87,
        height:87,
    },
    Name:{
      marginLeft: "15px",
        float:'left',
        fontSize:10,
        height:14,
    },
    divVol:{

    }
};
export default ComponentName;
