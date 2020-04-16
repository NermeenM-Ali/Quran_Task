
import React, { Component } from "react";
import { Text, Platform } from "react-native";
import {responsiveWidth, responsiveHeight, moderateScale, responsiveFontSize} from '../utils/responsiveDimensions'

const AppText = ({fontFamily,marginLeft, marginBottom,marginRight,padding, paddingHorizontal,flexWrap, marginTop,alignSelf,numberlines, text, color, fontSize, textAlign, fontWeight,textDecorationLine ,marginHorizontal}) => {
    return (
        <Text style={{
            ...styles.text, fontSize: fontSize ? fontSize  : styles.text.fontSize,
            color: color ? color : styles.text.color,
            fontWeight: fontWeight ? fontWeight : styles.text.fontWeight,
           textAlign: textAlign && textAlign ,
           paddingHorizontal: paddingHorizontal && paddingHorizontal,
           padding:padding&&padding,
           marginHorizontal:marginHorizontal,
           alignSelf: alignSelf,
           marginTop: marginTop,
            textDecorationLine:textDecorationLine?textDecorationLine:styles.text.textDecorationLine,
            fontFamily:fontFamily || 'Cairo-Regular',
            marginLeft: marginLeft,
            marginRight:marginRight,
            flexWrap:flexWrap,
            marginBottom:marginBottom
        }} numberOfLines={numberlines?numberlines:null} >{text}</Text>
    )
}


const styles = {
    text: {
       // fontFamily: fontFamily || 'Cairo-Regular',
        color: "#979797",
        fontSize: responsiveFontSize(6),
        writingDirection: "rtl",
        // fontWeight: "bold",
        textDecorationLine: 'none',
        textDecorationColor:"red",
        
    }
}

export default AppText;


