import React, { Component } from 'react';
import { Item, Input, Icon, Text,Label } from 'native-base';
import { Platform, View, TextInput } from 'react-native';
import CustomIcon from "react-native-vector-icons/Foundation";
import AppText from './AppText';
import * as color from '../assets/colors';
import {responsiveWidth, responsiveHeight, moderateScale, responsiveFontSize} from '../utils/responsiveDimensions'

const styles = {
  label: {
 //fontSize: wp(3),
   // color: '#73231F20',
    
    //fontWeight: 'bold',
    //marginBottom: hp(),
  },
  input: {
    //fontFamily: 'Cairo-Regular',
    //writingDirection: 'rtl',
    fontSize: responsiveFontSize(4.5),
    //alignSelf:'flex-start',

    
    marginLeft:moderateScale(-1.5),
    
    //marginRight:wp
   //textAlign: 'left',
    borderColor: 'black',
    marginRight:moderateScale(0)
  },

};

class AppInput extends Component {

  constructor(props) {
    super(props);
    this.inputRef = null;
  }

  focus = () => {
    if (this.inputRef._root) {
      this.inputRef._root.focus();
    }
  };
  render() {
    const {
      inputRef,
      autoFocus,
      onBlur,
      onSubmit,
      input,
      label,
      type,
      marginBottom,
      marginTop,
      password,
      error,
      hasError,
      icon,
      iconType,
      numeric,
      email,
      textColor,
      borderColor,
      iconColor,
      editable,
      blurOnSubmit,
      isRequired,
      returnKeyType,
      multiline,
      numberOfLines,
      isRTL,
      seePassword,
      //add
      hiddenUnderLine,
      noFloating,
      labelColor,
      placeholder
    } = this.props;
    console.log('is require' + isRTL)
    return (
      <View style={{alignSelf: 'stretch', marginBottom:moderateScale(0), marginTop:  responsiveHeight(0), }}>
         
          <Item
           // placeholder  
           //add noFloating
          // inlineLabel
          // floatingLabel={noFloating?false:true}
           style={{ flexDirection: isRTL ?'row-reverse':'row' , borderBottomColor: hiddenUnderLine? 'transparent': borderColor || 'gray' ,borderWidth:1, paddingBottom: 4}} icon
           error={hasError}  
          >
       {/* {isRequired && <CustomIcon name="asterisk" size={12} color={hasError ? "red" : "black"} />} */}
    
              <Label  style={[styles.label,{writingDirection: isRTL? 'rtl' : 'ltr',textAlign:isRTL? 'right' : 'left',color:labelColor || 'black', fontSize:responsiveFontSize(0),fontWeight:'400' ,marginTop:isRTL? responsiveHeight(-1):responsiveHeight(-1), fontFamily:'Cairo-SemiBold', }]}  >{label}</Label>
              <Input        
            ref={ref => this.inputRef = ref}
            returnKeyType={returnKeyType}
            blurOnSubmit={blurOnSubmit}
            onEndEditing={onBlur}
            onBlur={onBlur}
            multiline={multiline}
            numberOfLines={numberOfLines}
            {...input}
            style={{ ...styles.input, textAlign: isRTL ? 'right' : 'left', color:'black', fontFamily:'Cairo-SemiBold',marginHorizontal: moderateScale(0), marginBottom: marginBottom||moderateScale(0),marginTop:marginTop || moderateScale(-1), }}
             placeholder={placeholder}
            editable={editable}
            placeholderTextColor={textColor || 'gray'}
            secureTextEntry={password}
            keyboardType={numeric ? 'phone-pad' : email ? 'email-address' : 'default'}
            onSubmitEditing={onSubmit}
          />

            </Item>
          
        {hasError ? (
          <AppText  text={error} color="red" textAlign={isRTL ?'right': 'left'} marginLeft={moderateScale(2)} marginHorizontal={moderateScale(2)} fontSize={responsiveFontSize(3.6)} marginTop={moderateScale(-3.5)} />
          ) : (<AppText text="" />)}
      </View>
    );
  }
}




export default AppInput;

































/*import React, { Component } from 'react';
import { Item, Input, Icon, Text,Label } from 'native-base';
import { Platform, View, TextInput } from 'react-native';
import CustomIcon from "react-native-vector-icons/Foundation";
import AppText from './AppText';
import * as color from '../assets/colors';
import { moderateScale } from '../utils/responsiveDimensions';
import { widthPercentageToDP  as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = {
  label: {
    fontSize: 15,
    color: '#73231F20',
    
    //fontWeight: 'bold',
    //marginBottom: hp(),
  },
  input: {
    //fontFamily: 'Cairo-Regular',
    //writingDirection: 'rtl',
    fontSize: wp(3),
    alignSelf:'center',
   // marginTop:hp(1),
  //  textAlign: 'right',
    borderColor: 'black',
  },
  placeholder:{
    fontSize:wp(3)
  }
};

class AppInput extends Component {

  constructor(props) {
    super(props);
    this.inputRef = null;
  }

  focus = () => {
    if (this.inputRef._root) {
      this.inputRef._root.focus();
    }
  };
  render() {
    const {
      inputRef,
      autoFocus,
      onBlur,
      onSubmit,
      input,
      label,
      type,
      marginBottom,
      marginTop,
      password,
      error,
      hasError,
      icon,
      iconType,
      numeric,
      email,
      textColor,
      borderColor,
      iconColor,
      editable,
      blurOnSubmit,
      isRequired,
      returnKeyType,
      multiline,
      numberOfLines,
      isRTL,
      seePassword,
      //add
      hiddenUnderLine,
      noFloating,
      labelColor,
      placeholder
    } = this.props;
    console.log('is require' + isRTL)
    return (
      <View style={{alignSelf: 'stretch', marginBottom: marginBottom || 0, marginTop: marginTop || 0, }}>
         
          <Item
           // placeholder  
           //add noFloating
          // inlineLabel
          // floatingLabel={noFloating?false:true}
           style={{ flexDirection: isRTL ?'row-reverse':'row' , borderBottomColor: hiddenUnderLine? 'transparent': borderColor || 'gray' ,borderWidth:1, paddingBottom: 4}} icon
           error={hasError}  
          >
       {/* {isRequired && <CustomIcon name="asterisk" size={12} color={hasError ? "red" : "black"} />} *///}
    
        /*      <Label  style={[styles.label,{writingDirection: isRTL? 'rtl' : 'ltr',textAlign:isRTL? 'right' : 'left',color:labelColor || 'black', fontSize:wp(2.5),fontWeight:'400' , marginLeft:wp(1.5), marginRight:wp(1.5), fontFamily:'Cairo-Regular' }]}  >{label}</Label>
              <Input        
            ref={ref => this.inputRef = ref}
            returnKeyType={returnKeyType}
            blurOnSubmit={blurOnSubmit}
            onEndEditing={onBlur}
            onBlur={onBlur}
            multiline={multiline}
            numberOfLines={numberOfLines}
            {...input}
            style={{ ...styles.input, textAlign: isRTL ? 'right' : 'left', color:'black', marginHorizontal: wp(2), marginBottom:hp(3) }}
             placeholder={label}
            editable={editable}
            placeholderTextColor={textColor || 'gray'}
            secureTextEntry={password}
            keyboardType={numeric ? 'phone-pad' : email ? 'email-address' : 'default'}
            onSubmitEditing={onSubmit}
          />

            </Item>
          
        {hasError ? (
          <AppText  text={error} color="red" textAlign={isRTL ?'right': 'left'} marginLeft={wp(1)} marginHorizontal={wp(1.5)} fontSize={wp(2.5)} marginTop={this.props.isRtl?hp(-4.5) :hp(-4.8)} />
          ) : (<AppText text="" />)}
      </View>
    );
  }
}




export default AppInput;
*/