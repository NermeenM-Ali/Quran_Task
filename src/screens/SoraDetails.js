import React, {Component} from 'react'
import {View, Text, Dimensions, StatusBar, Image, FlatList, ScrollView} from 'react-native'
import Header from '../components/Header'
import RenderAyahsRow from '../components/RenderAyahsRow'
import { responsiveHeight, moderateScale, responsiveFontSize, responsiveWidth } from '../utils/responsiveDimensions'
import NavigationBar from 'react-native-navbar-color'

const WIDTH = Dimensions.get('screen').width
export default class SoraDetails extends Component {
    constructor(props) {
        super(props)
        
    }
    componentDidMount() {
        NavigationBar.setColor('#006400')
        StatusBar.setHidden(false, 'slide')
        StatusBar.setBackgroundColor('#006400')
        StatusBar.setBarStyle('light-content', false)
    }

    renderTopPart=(juz, page)=>{
        return(
            <View style={{backgroundColor:'#DCEDC8', height: responsiveHeight(5),
                         width: WIDTH, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize: moderateScale(6)}}>{`Juz: ${juz} :  Page: ${page}`}</Text>
            </View>
        )
    }

    renderDetails=(enTransName, arName, imgType, data)=>{
        
        return(
            <View style={{backgroundColor:'white', height: responsiveHeight(20),
                    width: WIDTH, justifyContent:'center', alignItems:'center'}}>
                 <Text style={{fontSize: responsiveFontSize(12), fontFamily:"Amiri-Regular"}}>{arName}</Text>
                 <Text style={{fontSize: responsiveFontSize(9), marginTop: moderateScale(4)}}>{enTransName}</Text>       
            
                <View style={{flexDirection: 'row', backgroundColor:'white', width: WIDTH, height: responsiveHeight(7), marginBottom: moderateScale(0)}}>
                {
                    imgType === 'Meccan'?
                    <Image source={require('../assets/imgs/mekkah.png')} style={{width: responsiveWidth(7), height: responsiveHeight(5), alignSelf:'center', marginLeft: moderateScale(30), marginTop: moderateScale(7)}}/>
                    :
                    <Image source={require('../assets/imgs/mosque.png')} style={{width: responsiveWidth(7), height: responsiveHeight(5), alignSelf:'center', marginLeft: moderateScale(30), marginTop: moderateScale(-2)}}/>
                } 

                        <Text style={{marginLeft: moderateScale(70), marginTop: moderateScale(10), fontSize: responsiveFontSize(7)}}>
                            {`Ayahs: ${data}`}
                        </Text>
                </View>
            </View>
        )
    }

    renderContent=(data)=>{
        return(
            <FlatList
                    data={data}
                    renderItem={({item, index})=>(
                        <RenderAyahsRow item={item} index={index}/>
                    )}
                    keyExtractor={(item, index)=> index.toString()}
                    
            />
        )
    }
    render() {
        const {data, num, enName, arName, index, enTransName, imgType} = this.props
      //  alert(data.length)
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                {/*<StatusBar hidden={true}/>*/}
               <ScrollView >
                    <Header headerText={enName} num={num} juzData = {data[index].juz}/> 
                    {this.renderTopPart(data[index].juz, data[index].page)}
                    {this.renderDetails(enTransName, arName, imgType, data.length)}
                    {this.renderContent(data)}
                   
               </ScrollView>
            </View>
        )
    }
}
