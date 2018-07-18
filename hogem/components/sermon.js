import React from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { colors, mainS, cardS } from '../assets/styles';


export class Sermon extends React.Component{
	constructor() {
		super();
	}

	sermons = [
		{
			key: 0, 
			name: "Sermon Title",
			speaker: "Speaker",
			desc: "Sermon description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam enim. Sed id rhoncus lacus. Morbi eget velit vitae felis sodales imperdiet. Quisque rhoncus ultricies turpis eu mollis.",
			//audio: "",
		},
		{
			key: 1, 
			name: "Sermon Title",
			speaker: "Speaker",
			desc: "Sermon description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam enim. Sed id rhoncus lacus. Morbi eget velit vitae felis sodales imperdiet. Quisque rhoncus ultricies turpis eu mollis.",
			//audio: "",
		},
		{
			key: 2, 
			name: "Sermon Title",
			speaker: "Speaker",
			desc: "Sermon description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam enim. Sed id rhoncus lacus. Morbi eget velit vitae felis sodales imperdiet. Quisque rhoncus ultricies turpis eu mollis.",
			//audio: "",
		},
		{
			key: 3, 
			name: "Sermon Title",
			speaker: "Speaker",
			desc: "Sermon description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam enim. Sed id rhoncus lacus. Morbi eget velit vitae felis sodales imperdiet. Quisque rhoncus ultricies turpis eu mollis.",
			//audio: "",
		},
		{
			key: 4, 
			name: "Sermon Title",
			speaker: "Speaker",
			desc: "Sermon description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis diam enim. Sed id rhoncus lacus. Morbi eget velit vitae felis sodales imperdiet. Quisque rhoncus ultricies turpis eu mollis.",
			//audio: "",
		},
		
	];

	descToggle( key ) {
		
		console.log( key );

	}

	printSermons() {
		return ( this.sermons.map( s => {
			return ( 
				<View style={cardS.card} key={s.key}>
				
					<Text style={cardS.cat}>SERMON</Text>
					
					<Text style={cardS.title}>{s.name}</Text>
					
					<View style={cardS.desc}>
						<Text style={cardS.sub}>{s.speaker}</Text>
						<Text style={cardS.text}>{s.desc}</Text>
					</View> 

					<View style={cardS.player}>
						<FontAwesome name="play" color={colors.cardSub} size={24}/>
						<TouchableHighlight onPress={ () => this.descToggle(s.key)}>
							<FontAwesome name="chevron-up" color={colors.cardSub} size={24}/>
						</TouchableHighlight>
					</View>
				</View>
			
		) } ) );
	}
	
	render() {
		return(
			
			<ScrollView >
			
				{this.printSermons()}

			</ScrollView>

		)
	}

}
