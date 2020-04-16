import React, {Component} from 'react'
import {View, StatusBar, TouchableOpacity, Image, Text, Dimensions, FlatList,} from 'react-native'
import NavigationBar from 'react-native-navbar-color'
import { Icon } from 'native-base'
import {connect} from 'react-redux'
import {BottomTabsAction} from '../actions/BottomTabsAction'
import { responsiveHeight, responsiveWidth, moderateScale, responsiveFontSize } from '../utils/responsiveDimensions'
import * as color from '../assets/colors'
import Header from '../components/Header'
import StateScreen from './StateScreen'
import {TopBarAction} from '../actions/TopBarAction'
import RenderRow from '../components/RenderRow'
import axios from 'axios'
import JuzScreen from './JuzScreen'


const width = Dimensions.get('screen').width
class Content extends Component {
    constructor(props) {
        super(props)
        this.state={
            allData:this.props.allData,
            ayahsData: this.props.ayahsData,
        }
    }

    componentDidMount() {
        NavigationBar.setColor('#006400')
        StatusBar.setHidden(false, 'slide')
        StatusBar.setBackgroundColor('#006400')
        StatusBar.setBarStyle('light-content', false)
    }
 
    

    /*componentDidMount() {
        axios.get('http://api.alquran.cloud/v1/quran/ar.muyassar')
        .then((response)=>{
            
            this.setState({
                allData: response.data.data.surahs
            })
            for(let i=0; i<response.data.data.surahs.length ; i++) {
                this.setState({
                    
                    ayahsData: [...this.state.ayahsData, response.data.data.surahs[i].ayahs]
                })
                
            }
            
            
            console.log(`juzData: ${this.state.juzData}`)
        }).catch(err=>{
            console.log(err.message)
        })
    }*/

    renderTabBar=()=>{
        const {TopBarAction, isSora, isPage, isJuz, isHizb} = this.props
        return(
            <View style={{width: width, height: responsiveHeight(7), 
                          backgroundColor:'#f5f1da', flexDirection:'row', elevation: responsiveWidth(0.5)}}>
                <TouchableOpacity activeOpacity={0.8}
                    
                    style={{width: width/4, height: isSora? responsiveHeight(6.5):responsiveHeight(6), 
                            backgroundColor: isSora? 'white':'transparent', 
                            marginTop:moderateScale(3),borderTopRightRadius: responsiveWidth(1), borderTopLeftRadius: responsiveWidth(1),
                            justifyContent:'center', alignItems:'center', elevation:-1}}

                    onPress={()=>{
                        TopBarAction(true, false, false, false)
                        BottomTabsAction(true, false)
                    }}        
                >
                    <Text style={{fontSize: responsiveFontSize(8), color:'#935900', fontWeight: isSora? 'bold': 'normal'}}>Sora</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}
                    style={{width: width/4, height: isPage? responsiveHeight(6.5):responsiveHeight(6), 
                            backgroundColor: isPage? 'white': 'transparent', 
                            marginTop:moderateScale(3),borderTopRightRadius: responsiveWidth(1), borderTopLeftRadius: responsiveWidth(1),
                            justifyContent:'center', alignItems:'center'}}

                            onPress={()=>{
                                TopBarAction(false, true, false, false)
                                BottomTabsAction(true, false)
                            }}          
                >
                    <Text style={{fontSize: responsiveFontSize(8), color:'#935900', fontWeight: isPage? 'bold': 'normal'}}>Page</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}
                    style={{width: width/4, height:isJuz? responsiveHeight(6.5):responsiveHeight(6), 
                            backgroundColor:isJuz? 'white':'transparent', marginTop:moderateScale(3),borderTopRightRadius: responsiveWidth(1), 
                            justifyContent:'center', alignItems:'center', borderTopLeftRadius: responsiveWidth(1)}}

                    onPress={()=>{
                                TopBarAction(false, false, true, false)
                                BottomTabsAction(true, false)
                            }}          
                >
                    <Text style={{fontSize: responsiveFontSize(8), color:'#935900',fontWeight: isJuz? 'bold': 'normal'}}>Juz</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}
                    style={{width: width/4, height: isHizb? responsiveHeight(6.5):responsiveHeight(6), 
                            backgroundColor:isHizb? 'white': 'transparent', marginTop:moderateScale(3),borderTopRightRadius: responsiveWidth(1),
                            justifyContent:'center', alignItems:'center', borderTopLeftRadius: responsiveWidth(1)}}

                    onPress={()=>{
                                TopBarAction(false, false, false, true)
                                BottomTabsAction(true, false)
                            }}          
                >
                    <Text style={{fontSize: responsiveFontSize(8), color:'#935900', fontWeight: isHizb? 'bold': 'normal'}}>Hizb</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderReadPart=()=>{
        //eae7d9
        return(
            <View style={{width: responsiveWidth(90), height: responsiveHeight(7), flexDirection:'row',
                        backgroundColor:'#ebe6e6', marginTop: moderateScale(7), alignSelf:'center', borderRadius: responsiveWidth(4)}}>
          
               <Image source={require('../assets/imgs/book.png')} 
                   style={{width: responsiveWidth(10), height: responsiveHeight(5), marginLeft: moderateScale(12), marginTop: moderateScale(5)}}/>
                    
                <Text style={{fontWeight:'bold', color:'black', fontSize:responsiveFontSize(7),
                             marginTop: moderateScale(7), marginLeft: moderateScale(5)}}>Last Read: Al-Nisa: 4: 10</Text>    
            </View>
        )
    }

    renderContent=()=>{
         return(
             <FlatList
                    data={this.state.allData}    
                    renderItem={({item, index})=>(
                        <RenderRow item={item} index={index}/>
                    )}
                    keyExtractor={(item, index)=> index.toString()}
                    style={{marginBottom: moderateScale(40)}}
             />
         )
    }


    renderBottomBar=()=>{
        const {BottomTabsAction, isstate, isquran} = this.props
        return(
            <View style={{backgroundColor: color.DARK_GREEN,flexDirection:'row',
                         position:'absolute', bottom:0, left:0, right:0, height: responsiveHeight(14)}}>
                <TouchableOpacity activeOpacity={0.8}
                    style={{width: responsiveWidth(48.5), height: responsiveHeight(13),marginTop: moderateScale(1),
                        marginLeft:moderateScale(2), backgroundColor:'transparent', justifyContent:'center', alignItems:'center'}}
                    
                      onPress={()=>{
                          BottomTabsAction(true, false)
                          
                      }}  
                >
                    <Image source={require('../assets/imgs/quran2.jpg')} style={{width: responsiveWidth(15), height: responsiveHeight(7), marginBottom: moderateScale(-4)}}/>
                     <Text style={{color:'white', fontSize: responsiveFontSize(7), fontFamily:'Cairo-SemiBold'}}>Quran</Text>   
                
                      {
                          isquran?
                          <View style={{position:'absolute', bottom:moderateScale(-2), left:0, right:0, backgroundColor:'#639a67', height: responsiveHeight(1)}}/>
                          :
                          null  
                      }
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8}
                    style={{width: responsiveWidth(48.5), height: responsiveHeight(13), marginTop: moderateScale(1),
                        marginLeft: moderateScale(2),backgroundColor:'transparent',
                         justifyContent:'center', alignItems:'center'}}
                
                        onPress={()=>{
                            this.props.BottomTabsAction(false, true)
                            
                        }} 
                >
                    <Icon name='bar-chart-2' type='Feather' style={{color:'white',marginTop: moderateScale(4.5), fontSize: responsiveFontSize(14)}}/>
                    <Text style={{color:'white', fontSize: responsiveFontSize(7), fontFamily:'Cairo-SemiBold'}}>States</Text>   
                
                {
                    isstate?
                    <View style={{position:'absolute', bottom:moderateScale(-2), left:0, right:0, backgroundColor:'#639a67', height: responsiveHeight(1)}}/>
                    :
                    null

                }
               
                </TouchableOpacity>
            </View>
        )
    }

    
    render() {
       // alert(JSON.stringify(this.props.allData))
        const {isquran, isstate, isJuz} = this.props
        //Salert(isquran)
       // alert(this.state.allData[0].ayahs)
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                {/*<StatusBar backgroundColor={color.DARK_GREEN}/>*/}
                <Header type='contentPage'/>

                {
                    isstate?
                    null
                    :
                    <View>
                       { this.renderTabBar()}
                       { this.renderReadPart()}
                    </View>
                }
                

                {
                    isquran &&!isstate?
                    isJuz && isquran?
                    <JuzScreen data={this.state.ayahsData}/>
                    :
                    this.renderContent()
                    :
                    isstate && !isquran?
                    <StateScreen/>
                    :
                    null
                }
                {this.renderBottomBar()}
            </View>
        )
    }
}


const mapStateToProps= state=>({
    isquran: state.bottomTabs.isQuran,
    isstate: state.bottomTabs.isState,

    isSora: state.topBar.isSora,
    isPage: state.topBar.isPage,
    isJuz: state.topBar.isJuz,
    isHizb: state.topBar.isHizb,
})

mapDispatchToProps = {
    BottomTabsAction,
    TopBarAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Content)