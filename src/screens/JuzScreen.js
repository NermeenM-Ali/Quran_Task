import React, {Component} from 'react'
import {View, SectionList, Dimensions, Text, FlatList, SliderComponent} from 'react-native'
import { responsiveWidth, responsiveHeight, moderateScale, responsiveFontSize } from '../utils/responsiveDimensions';

const WIDTH = Dimensions.get('screen').width
class RenderRow extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            uniqueItems: this.getUnique(this.props.item, this.props.index),
            juzData:[]
        }
        this.getArrayofJuz(this.props.item)
    }

     getUnique=(arr, index)=> {

        const unique = arr
             .map(e => e[index])
      
             // store the keys of the unique objects
             .map((e, i, final) => final.indexOf(e) === i && i)
      
             // eliminate the dead keys & store unique objects
            .filter(e => arr[e]).map(e => arr[e]);      
      
         return unique;
      }
      getArrayofJuz=(arr) =>{
          for(let i =0; i< arr.length; i++) {
                this.setState({
                    juzData: [...this.state.juzData, arr[i].juz]
                })
                console.log(`item is ${this.state.juzData}`)
          }
      }
    render() {
        const {item, index} = this.props
       // console.log('items'              +item )
      
        return(
            <View style={{width: WIDTH, height: responsiveHeight(20), alignSelf:'center',backgroundColor:'white', elevation: responsiveWidth(0.5), marginTop: moderateScale(3), marginBottom: moderateScale(2)}}>               
                <View style={{position: 'absolute', right:0, top:0, bottom:0, width: responsiveHeight(7), 
                            justifyContent:'center', alignItems:'center', backgroundColor:'#ebe6e6',
                             borderTopLeftRadius: responsiveWidth(2)}}>
                    
                    <Text style={{fontFamily:'az-topaz', fontSize: responsiveFontSize(10)}}>{
                       this.state.juzData.map(item=>(
                           item
                       ))
                    }</Text> 
                </View>  
            </View>
        )
    }
}
export default class JuzScreen extends Component {
    constructor(props) {
        super(props) 
    }

    renderContent=(data)=>{
        return(
            <FlatList
                        data={data}
                        renderItem={({item, index})=>(
                            <RenderRow item={item} index={index}/>
                        )}
                        keyExtractor={(item, index)=> index.toString()}
            />
        )
    }
    render() {
        const {data} = this.props
        //console.log(`data is ${JSON.stringify(data)}`)
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                {this.renderContent(data)}
            </View>
        )
    }
}
