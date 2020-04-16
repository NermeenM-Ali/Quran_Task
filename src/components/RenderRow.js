import React, {Component} from 'react' 
import {View, Dimensions, Text, Image, TouchableOpacity} from 'react-native'
import { responsiveHeight, moderateScale, responsiveFontSize, responsiveWidth } from '../utils/responsiveDimensions'
import { Navigation } from 'react-native-navigation'


const WIDTH = Dimensions.get('screen').width
export default class RenderRow extends Component {
    constructor(props) {
        super(props)
        
    }
    componentDidMount() {
        
    }
    render() {
        const{name, number, englishName, englishNameTranslation, revelationType, ayahs} = this.props.item
       // console.log(` name: ${name}, juz: ${ayahs[this.props.index].juz }`)
        return(
            <TouchableOpacity activeOpacity={0.8}
                         style={{backgroundColor:'white', width:WIDTH, height: responsiveHeight(9), 
                          marginTop: moderateScale(2), flexDirection:'row'}}
                          
                          onPress={()=>{
                             
                              Navigation.push('AppStack', {
                                  component:{
                                      name:'SoraDetails',
                                      options:{
                                          topBar:{
                                              visible: false,
                                              drawBehind: true
                                          },
                                          statusBar:{
                                         //     visible: false,
                                              drawBehind: true
                                          }
                                      },
                                      passProps:{
                                          data: ayahs,
                                          num: number,
                                          enName: englishName,
                                          arName: number === 1 ? name.slice(6) : name.slice(5),
                                          index: this.props.index,
                                          enTransName: englishNameTranslation,
                                          imgType: revelationType
                                      }
                                  }
                              })
                          }}
                          >

                <Text style={{marginLeft:number <10? moderateScale(8):moderateScale(5), alignSelf:'center', fontSize: responsiveFontSize(8)}}>{`${number}`}</Text>

                <View style={{backgroundColor:'transparent', width: responsiveWidth(37),
                             height: responsiveHeight(8), alignSelf:'center', marginLeft: moderateScale(0)}}>
                    <Text style={{marginTop: moderateScale(5), fontSize: responsiveFontSize(8.5), marginLeft: moderateScale(7)}}>{englishName}</Text>
                    <Text style={{color:'gray', marginLeft: moderateScale(7)}}>{englishNameTranslation}</Text>
                </View>      

                {
                    revelationType === 'Meccan'?
                    <Image source={require('../assets/imgs/mekkah.png')} style={{width: responsiveWidth(5), height: responsiveHeight(4), alignSelf:'center', marginLeft: moderateScale(10)}}/>
                    :
                    <Image source={require('../assets/imgs/mosque.png')} style={{width: responsiveWidth(5), height: responsiveHeight(4), alignSelf:'center', marginLeft: moderateScale(10)}}/>
                }   

                <View style={{justifyContent:'center', alignItems:'flex-start', backgroundColor:'transparent', width: responsiveWidth(40)}}>
                  <Text style={{marginLeft: moderateScale(28), alignSelf:'center', fontSize: responsiveFontSize(11), fontFamily:"Amiri-Regular"}}>
                      {number ===1 ? name.slice(6):name.slice(5)}</Text> 
                </View>      
            </TouchableOpacity>
        )
    }
}