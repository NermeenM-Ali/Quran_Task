import React, {Component} from 'react'
import {View, Text, Image, StatusBar} from 'react-native'
import axios from 'axios'
import { Navigation } from 'react-native-navigation'
import { responsiveFontSize, moderateScale } from '../utils/responsiveDimensions'
import Realm from 'realm'
import { RNToasty } from 'react-native-toasty'
import { connect } from 'react-redux'
import {RealmAction, isLoading} from '../actions/RealmAction'
import { Spinner } from 'native-base'
import NavigationBar from 'react-native-navbar-color'


class Splash extends Component {
    constructor() {
        super()
        this.state={
            realm: null,
            allData:[],
            ayahsData:[],
        }
    }

  
    componentDidMount() {
        NavigationBar.setColor('#ebe6e6')
        StatusBar.setHidden(false, 'slide')
        StatusBar.setBackgroundColor('#ebe6e6')
        StatusBar.setBarStyle('dark-content', false)
        this.props.isLoading(true)
        /*let LocalDB = null
        Realm.open({
            schema: [
                        {name: 'allData', properties: {name: 'allData[]'}},
                        {name: 'ayahsData', properties: {name: 'ayahsData[]'}}
                    ]
          }).then(realm => {
              this.setState({realm})
                realm.write(() => {
                     realm.create('allData', {name: this.state.allData});
                    realm.create('ayahsData', {name: this.state.ayahsData});
                   // alert('Sucess')

                    this.props.RealmAction(realm.objects('allData'), realm.objects('ayahsData'))
                    this.setState({
                        allData: realm.objects('allData'),
                        ayahsData: realm.objects('ayahsData')
                    })

                    LocalDB = realm
              })
            })
              .catch((err)=>{alert(`Realm err: ${err.message}`)})

    if(LocalDB !== null) {
            Navigation.push('AppStack', {
                component:{
                    name: 'Content',
                    options:{
                        topBar:{
                            visible: false,
                            drawBehind: true
                        },
                        statusBar:{
                            drawBehind: true
                        }
                    },
                    passProps:{
                        allData: this.state.allData,
                        ayahsData: this.state.ayahsData
                    }
                }
            })
       }else {*/
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
            
        })
        .then(()=>{
            this.props.isLoading(false)
            console.log(this.state.allData)
            Navigation.push('AppStack', {
                component:{
                    name: 'Content',
                    options:{
                        topBar:{
                            visible: false,
                            drawBehind: true
                        },
                        statusBar:{
                            drawBehind: true
                        }
                    },
                    passProps:{
                        allData: this.state.allData,
                        ayahsData: this.state.ayahsData
                    }
                }
            })
            
        })
        .catch(err=>{
            RNToasty.Error({title: err.message})
            console.log("Error 1",err)
            console.log("Error 2",err.response)
            console.log("Error 3",err.statusCode)
        })
      
  }

   /* componentWillUnmount() {
        // Close the realm if there is one open.
        const {realm} = this.state;
        if (realm !== null && !realm.isClosed) {
          realm.close();
        }
        
      }*/

    
    render() {
        
        return(
            <View style={{flex:1, backgroundColor:'#ebe6e6', justifyContent:'center', alignItems:'center'}}>
                <StatusBar hidden/>
                <Image source={require('../assets/imgs/logo.png')} style={{width:700, height:700, borderRadius:350, resizeMode:'contain', marginTop: moderateScale(-100)}}/>
                <Text style={{fontFamily:'aref-regular', fontSize: responsiveFontSize(26), color:'darkgreen', marginTop: moderateScale(-100)}}>Quran</Text>
                {
                    this.props.loading?
                    <Spinner color='darkgreen' size='large'/>
                    :
                    null
                }
            </View>
        )
    }
}

const mapStateToProps = state=>({
    realmData: state.realmReducer.allData,
    realmAyahs: state.realmReducer.ayahsData,
    loading: state.realmReducer.isLoading
})

const mapDispatchToProps = {
    RealmAction,
    isLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash)





/*        Realm.open({
                schema: [
                            {name: 'allData', properties: {name: 'data'}},
                            {name: 'ayahsData', properties: {name: 'data'}}
                        ]
              }).then(realm => {
                    realm.write(() => {
                         realm.create('allData', {name: JSON.stringify(this.state.allData)});
                        realm.create('ayahsData', {name: JSON.stringify(this.state.ayahsData)});
                        alert('Sucess')

                        this.setState({
                            allData: JSON.stringify(realm.objects('allData')),
                            ayahsData: JSON.stringify(realm.objects('ayahsData'))
                        })
                        
                  })

                  
                  
                  
                  //realm.close();
                }).catch(err=>{
                    alert(`Realm err: ${err.message}`)
                })
     /*           
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
            
            Navigation.push('AppStack', {
                component:{
                    name: 'Content',
                    options:{
                        topBar:{
                            visible: false,
                            drawBehind: true
                        },
                        statusBar:{
                            drawBehind: true
                        }
                    },
                    passProps:{
                        allData: this.state.allData,
                        ayahsData: this.state.ayahsData
                    }
                }
            })
            
        }).catch(err=>{
            console.log(err.message)
        })*/