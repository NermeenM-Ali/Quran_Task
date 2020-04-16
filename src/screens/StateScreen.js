import React, {Component} from 'react'
import {View, Text, StatusBar} from 'react-native'
import NavigationBar from 'react-native-navbar-color'
import {connect} from 'react-redux'
import * as color from '../assets/colors'

class StateScreen extends Component {
    constructor() {
        super()
    }

     componentDidMount() {
        NavigationBar.setColor('#006400')
        StatusBar.setHidden(false, 'slide')
        StatusBar.setBackgroundColor('#006400')
        StatusBar.setBarStyle('light-content', false)
    }
    render() {
        return(
            <View style={{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                <Text>StateScreen</Text>
            </View>
        )
    }
}
const mapStateToProps= state=>({
  
})

mapDispatchToProps = {
   
}
export default connect(mapStateToProps, mapDispatchToProps)(StateScreen)