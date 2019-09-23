import React from 'react';
import {Text,View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Button from './Bekleyen.js';

const Button =({}) => {
	return(	
		<TouchableOpacity style= {styles.buttonBody}>
			<Text style={styles.buttonText}>Bekleyen Arızalar</Text>
		</TouchableOpacity>

	);
};
const styles =StyleSheet.create() {

	buttonBody: {
		
		backgroundColor: '#736AFF',
		height: 60,
		justifyContent: 'center',
		alignItems:'center',
		marginTop: 30,
		
	},
	buttonText: {
		color: 'black',
		fontSize: 30,
	},
	container: {
		justifyContent:'center',
	}
};


export default Button;
