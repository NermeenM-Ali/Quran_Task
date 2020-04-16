import React, {Component} from 'react'
import {View, Dimensions, Text, Image, StatusBar, TouchableOpacity,} from 'react-native'
import { responsiveHeight, responsiveWidth, moderateScale, responsiveFontSize } from '../utils/responsiveDimensions'
import * as color from '../assets/colors'
import { Icon } from 'native-base'
import { Navigation } from 'react-native-navigation'

const WIDTH = Dimensions.get('screen').width

export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {headerText, type, num, juzData} = this.props
        return(
            <View style={{width: WIDTH, height: type === 'contentPage'? responsiveHeight(10):responsiveHeight(12),flexDirection:'row', justifyContent:'flex-start',alignItems:'center',
                         backgroundColor:color.MAIN_COLOR, elevation: responsiveWidth(7)}}>
                
                {
                    type === 'contentPage'?
                    <Icon name='ios-menu' type='Ionicons' style={{color:'white', marginBottom: moderateScale(-12), marginLeft: moderateScale(7), fontSize: responsiveFontSize(14)}}/>
                    :
                    <TouchableOpacity style={{width: responsiveWidth(15), height: responsiveHeight(4), marginTop: moderateScale(12),backgroundColor: 'transparent', justifyContent:'center', alignItems:'center'}} activeOpacity={1} onPress={()=> Navigation.pop('AppStack')}>
                        <Icon name='arrowleft' type='AntDesign' style={{color:'white', fontSize: responsiveFontSize(10)}}/>
                    </TouchableOpacity>
             }
               

               {
                   type === 'contentPage'?
                   null
                   :
                   <View style={{backgroundColor:'transparent', width: responsiveWidth(60),
                        height: responsiveHeight(7), alignItems:'center', justifyContent:'center',
                        marginTop: moderateScale(10), marginLeft: moderateScale(10), flexDirection:'row'}}>

                        <Text style={{fontFamily:'Cairo-Regular', fontSize: responsiveFontSize(8), color: 'white', marginBottom: moderateScale(-2)}}>{`${num}.`}</Text>
                        
                        <Text style={{fontFamily:'Cairo-Regular', fontSize: responsiveFontSize(8), color: 'white', marginBottom: moderateScale(-2)}}>{`${headerText}, Juz ${juzData}`}</Text>
                        
                        <Icon name='play-arrow' type='MaterialIcons' style={{color:'white', marginBottom: moderateScale(-4), marginLeft: moderateScale(3), fontSize: responsiveFontSize(5.5), transform:[{rotate:'90deg'}]}}/>
                        
                    </View>
               }
            </View>
        )
    }
}