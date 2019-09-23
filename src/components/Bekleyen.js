import React from 'react';
import {Text,View } from 'react-native';


const Bekleyen= () => {
	const {textStyle, viewStyle} = styles;
	 return(
		<View style={viewStyle}>
		
		<Text style={textStyle}>Bekleyen arıza sayısı</Text>
		</View>
    );
};

const styles = {
	textStyle: {
		fontSize: 30
	},
	viewStyle:{
		backgroundColor: '#736AFF',
		height: 60,
		justifyContent: 'center',
		alignItems:'center',
		marginTop: 30,
		shadowOffset:{ width:0, height: 2},
		shadowOpacity: 0.5,
			}	
};

export default Header;