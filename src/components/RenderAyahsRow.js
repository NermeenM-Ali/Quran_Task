import React, {Component} from 'react'
import {View, Text, Dimensions} from 'react-native'
import { responsiveHeight, moderateScale, responsiveFontSize, responsiveWidth } from '../utils/responsiveDimensions'
import { Icon } from 'native-base'

const WIDTH = Dimensions.get('screen').width
export default class RenderAyahsRow extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {number, text} = this.props.item
        return(
            
                <View style={{width: WIDTH, height: responsiveHeight(32), backgroundColor:number%2 ===0?'#E8F5E9' :'white', elevation: number%2===0? responsiveWidth(0.2): 0, marginTop: moderateScale(2)}}>
                    <View style={{position:'absolute', top:0, left:0, right:0, backgroundColor:'transparent', flexDirection:'row', height: responsiveHeight(4), justifyContent:'space-between'}}>
                        <Text style={{marginLeft: moderateScale(7), alignSelf:'center', fontSize: responsiveFontSize(7), color:'gray', fontWeight:'bold'}}>{number}</Text>
                        <Icon name='dots-three-horizontal' type='Entypo' style={{fontSize: responsiveFontSize(8), marginRight: moderateScale(5), alignSelf:'center', color:'gray'}}/>
                    </View>

                    <Text style={{alignSelf:'center', marginRight: moderateScale(5),marginTop: moderateScale(14), fontFamily:"Amiri-Regular", fontSize: responsiveFontSize(7)}}>{text}</Text>
                </View>

        )
    }
}