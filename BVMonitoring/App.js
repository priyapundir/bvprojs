import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Text } from 'react-native';

import PropTypes from 'prop-types';

class ApplicationTool extends Component {

  render() {

    return (

      <Text style={{fontSize : this.props.FontSize, color: this.props.FontColor , width: this.props.width , height: this.props.height , backgroundColor: this.props.backgroundColor}}>  {this.props.name} ! </Text>

    );
  }
}
 
export default class App extends Component{

  render() {

    return (
    
        <View style={styles.MainContainer}>

              <ApplicationTool name='Hermes' FontSize = {20} FontColor= '#FF9800' backgroundColor = 'blue'/>

              <ApplicationTool name='BVNet2' FontSize = {22} FontColor= '#03A9F4' backgroundColor = 'grey' />

              <ApplicationTool name='PCM' FontSize = {24} FontColor= '#FFC107'   backgroundColor = 'green'/>

              <ApplicationTool name='Verigates' FontSize = {26} FontColor= '#4CAF50' />
             
        </View>
              
    );
  }
}

ApplicationTool.propTypes =
{
  name: PropTypes.string,
  FontSize: PropTypes.number,
  FontColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string
  
}
 
ApplicationTool.defaultProps =
{
  name: "Default Name",
  FontColor: "#00E676",
  FontSize: 15,
  width: 100 * 2,
  height: 100,
  backgroundColor: 'red'
}
    
const styles = StyleSheet.create({
    
 MainContainer :{
 
  flex:1,
  paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
  alignItems: 'center',
  justifyContent: 'center',
    
  }

});