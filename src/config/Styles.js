'use strict';

import {StyleSheet, Dimensions, Platform} from "react-native";
import ColorsApp from './ColorsApp';
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { isTablet } from 'react-native-device-info';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const PrimaryColor = ColorsApp.PRIMARY;
const SecondaryColor = ColorsApp.SECONDARY;
const BackgroundColor = ColorsApp.BACKGROUND;

module.exports = StyleSheet.create({


//////////////////////// LOGIN/SIGNUP

AuthLogo:{
	width: '100%',
	height: screenHeight/20,
	maxHeight: '100%',
	marginBottom: 50
},

AuthContent:{
	marginHorizontal: 50
},

AuthInput:{
	marginBottom: 10,
},

AuthButton:{
	marginTop: 15,
	borderRadius: RFPercentage(0.8),
},

AuthButtonContent:{
	paddingVertical: 10,
},

AuthButtonLabel:{
	fontWeight: 'bold',
	fontSize: RFPercentage(2)
},

AuthCheckBoxLabel:{
	textTransform: 'capitalize',
	fontSize: RFValue(15, screenHeight),
	marginLeft: 5,
	letterSpacing: 0,
	color: '#fff'
},

AuthCheckBoxContent:{
	backgroundColor: BackgroundColor
},

AuthBottomText:{
	fontSize: RFValue(17, screenHeight),
},

AuthBottomContent:{
marginTop: 20,
alignItems: 'center'
},

ForgotPass:{
	marginVertical: 10,
	alignSelf: 'flex-end',
	marginHorizontal: 4
},

//////////////////////// DRAWER MENU

Drawer:{
flex: 1,
backgroundColor: SecondaryColor,
},

DrawerHeader:{
	marginTop: screenHeight/17,
	marginBottom: screenHeight/40,
	justifyContent: 'center',
	alignItems: 'center'  
},

DrawerImage:{
	width: '100%',
	height: screenHeight/25,
	maxHeight: '100%',
	marginVertical: 10
},

DrawerMenuItem:{
	marginVertical: isTablet() === true ? 20 : 5,
	marginHorizontal: isTablet() === true ? 15 : 10
},

DrawerTitleMenu:{
	fontSize: RFValue(17, screenHeight),
},

DrawerIconMenu:{
	fontSize: RFValue(30, screenHeight),
	marginRight: 15
},

DrawerButton:{
	borderRadius: RFPercentage(0.8),
	marginHorizontal: isTablet() === true ? 20 : 15,
	marginVertical: 10,
},

DrawerButtonLabel:{
	textTransform: 'capitalize',
	fontSize: RFValue(17, screenHeight),
},

DrawerButtonContent:{
	height: screenHeight*0.062,
	width: '100%'
},

DrawerTitleHeader:{
	fontWeight: 'bold',
	fontSize: 20,
	marginBottom: 8
},

DrawerSubTitleHeader:{
	fontSize: 14,
},

DrawerFooter:{
	height: screenHeight*0.10,
	width: '100%',
	position: 'absolute',
	justifyContent: 'center',
	alignContent: 'center',
	alignItems: 'center',
	bottom: 0
},

DrawerSearchInput:{
	marginHorizontal: 15,
	marginVertical: 15
},

DrawerSearchInputStyle:{
	fontSize: RFValue(17, screenHeight),
},

//////////////////////// SEARCH

SearchBg:{
	backgroundColor: PrimaryColor,
	marginBottom: 20
},

SearchInput:{
	marginHorizontal: 15,
	marginVertical: 15
},

SearchInputStyle:{
	fontSize: RFValue(17, screenHeight),
},

SearchTotal:{
	fontSize: RFValue(17, screenHeight),
	color: '#959595',
},

//////////////////////// BUTTONS

Button1:{
	alignItems: 'center',
	flexDirection: 'row',
	backgroundColor: '#333',
	height: screenHeight*0.065,
	borderRadius: 60,
	width: '100%',
	paddingHorizontal: 55,
	position: 'relative',
	marginBottom: 20
},

Button1Text:{
	fontWeight: 'bold',
	fontSize: RFValue(16, screenHeight),
},

Button1IconLeft:{
	color: '#ffffff',
	position: 'absolute',
	left: 20,
	fontSize: RFValue(20, screenHeight),
},

Button1IconRight:{
	color: '#ffffff',
	position: 'absolute',
	right: 15,
	fontSize: RFValue(20, screenHeight),
},

//////////////////////// PROFILE

HeaderProfile:{
	width: '100%',
	height: screenHeight*0.30,
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: 20
},

ImageProfile:{
	borderRadius: RFPercentage(0.8),
	width: isTablet() === true ? screenWidth*0.28 : screenWidth*0.20,
	height: 'auto',
	minHeight: isTablet() === true ? screenWidth*0.28 : screenWidth*0.20,
	marginBottom: 20	
},

ButtonProfile:{
	borderRadius: 60,
	width: '40%',
	marginHorizontal: isTablet() === true ? 20 : 15,
	marginTop: 20,
},

ButtonLabelProfile:{
	fontWeight: 'bold',
	fontSize: RFValue(16, screenHeight),
},

ButtonContentProfile:{
	height: screenHeight*0.05,
	width: '100%'
},

SubTextProfile:{
	fontSize: RFValue(18, screenHeight),
	color: '#fff',
	opacity: 0.5
},

TextProfile:{
	fontSize: RFValue(18, screenHeight),
	color: '#fff',
	fontWeight:'bold',
	marginBottom: 5
},

SignButton:{
	borderRadius: RFPercentage(0.8),
	marginHorizontal: isTablet() === true ? 20 : 15,
	marginVertical: 10,
},

SignButtonLabel:{
	fontWeight: 'bold',
	fontSize: RFValue(15, screenHeight),
},

SignButtonContent:{
	height: screenHeight*0.065,
	width: '100%'
},

SignButtonTextLabel:{
	color: '#fff',
	textTransform: 'capitalize'
},

SignButtonTextContent:{
	backgroundColor: BackgroundColor
},

//////////////////////// DETAILS

itemBackground:{
	width: '100%',
	height: screenHeight*0.40,
	position: 'relative',
},

itemPosterOverlay:{
	width: '100%',
	height: screenHeight*0.40,
	backgroundColor: 'rgba(0,0,0,0.5)',
	position: 'absolute',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'visible'
},

itemPoster:{
	borderRadius: RFPercentage(0.8),
	width: isTablet() === true ? screenWidth*0.28 : screenWidth*0.35,
	height: 'auto',
	minHeight: '100%'
},

itemButtons:{
	position: 'absolute',
	bottom: -20,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center'
},

itemPlayTrailer:{
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#333',
	borderRadius: RFPercentage(0.8),
	padding: 10,
	marginTop: isTablet() === true ? 20 : 10
},

itemPlayTrailerText:{
	fontSize: RFValue(16, screenHeight),
	color: '#aaaaaa',
},

itemPlayTrailerIcon:{
	color: '#aaaaaa',
	marginRight: 10
},

itemPlayContent:{
	height: screenHeight*0.06,
	width: isTablet() === true ? screenWidth*0.35 : screenWidth*0.50,
},

itemPlay:{
	borderRadius: RFPercentage(0.8),
},

itemPlayLabel:{
	fontSize: RFValue(16, screenHeight),
	letterSpacing: 0
},

itemFavIcon:{
	height: screenHeight*0.055,
	width: screenHeight*0.055,
	backgroundColor: '#fff',
	borderRadius: 100,
	marginLeft: isTablet() === true ? 15 : 10,
},

itemContent:{
	marginVertical: isTablet() === true ? 80 : 70,
	marginHorizontal: isTablet() === true ? 50 : 20
},

itemTitleContent:{
	alignItems: 'center',
	justifyContent: 'center',
	paddingHorizontal: isTablet() === true ? 15 : 10
},

itemTitle:{
	fontWeight: 'bold',
	fontSize: RFValue(16, screenHeight),
},

itemSubTitle:{
	fontSize: RFValue(16, screenHeight),
	marginTop: 5,
	color: '#959595'
},

itemRating:{
	fontWeight: 'bold',
	color: '#fec000',
	fontSize: RFValue(36, screenHeight),
},

itemRatingText:{
	color: '#959595',
	fontSize: RFValue(25, screenHeight),
},

itemListGroup:{
	flexDirection: 'row',
},

itemList:{
	alignItems: 'center',
	marginLeft: 40
},

itemListTitle:{
	color: '#959595',
	marginBottom: 5,
	fontSize: RFValue(16, screenHeight),
},

itemListSubTitle:{
	fontWeight: 'bold',
	fontSize: RFValue(16, screenHeight),

},

itemSection:{
	backgroundColor: 'rgba(255,255,255,0.05)',
	paddingHorizontal: isTablet() === true ? 30 : 20,
	paddingBottom: isTablet() === true ? 40 : 30,
	borderRadius: RFPercentage(0.8),
	marginVertical: 20
},

itemSectionTitle:{
	borderBottomWidth: 1,
	borderColor: 'rgba(255,255,255,0.05)',
	paddingBottom: 15,
	marginTop: 30,
	marginBottom: 10
},

itemSectionTitleLabel:{
	fontWeight: 'bold',
	fontSize: RFValue(16, screenHeight),
},

itemSectionDesc:{
	fontSize: RFValue(16, screenHeight),
	color: 'rgba(255,255,255,0.70)',
},

ItemReadMore:{
	backgroundColor: '#333',
	borderRadius: RFPercentage(0.8),
	padding: 10,
	marginTop: 15
},

ItemReadMoreText:{
	fontSize: RFValue(16, screenHeight),
	color: '#aaaaaa',
	backgroundColor: '#333',
	width: '100%',
	textAlign: 'center',
	borderRadius: RFPercentage(0.8),
},

itemBookmark:{
	justifyContent: 'center',
	alignContent: 'center',
	alignItems: 'center',
	marginTop: 30
},

itemBookmarkLabel:{
	color: 'rgba(255,255,255,0.70)',
	letterSpacing: 0
},

itemBookmarkButton:{
	backgroundColor: BackgroundColor,
},

//////////////////////// CARDS

card1View:{
	width: isTablet() === true ? screenWidth*0.26 : screenWidth*0.40,
	marginLeft: 15,
	position: 'relative',
	marginBottom: 20
},

card1Image:{
	borderRadius: 8,
	height: isTablet() === true ? screenHeight*0.25 : screenHeight*0.30,
	width: '100%'
},

card1Content:{
	marginHorizontal: 10
},

card1Badge:{
	position: 'absolute',
	zIndex: 9,
	left: 10,
	top: 10,
	backgroundColor: PrimaryColor,
},

card1Title:{
	fontSize: RFValue(17, screenHeight),
	fontWeight: 'bold',
	marginTop: 15,
	marginBottom: 5
},

card1SubTitle:{
	fontSize: RFPercentage(1.7),
	color: '#959595'
},

card2View:{
	width: '100%',
	marginLeft: 5,
	position: 'relative',
},

card2Image:{
	borderRadius: 8,
	height: isTablet() === true ? screenHeight*0.25 : screenHeight*0.30,
	width: '100%',
},

card2Play:{
	position: 'absolute',
	zIndex: 9,
	left: 0,
	top: 10,
	right: 0,
	bottom: 0,
	justifyContent: 'center',
	alignItems: 'center',
},

card2PlayIcon:{
	backgroundColor: 'rgba(0,0,0,0.5)',
	width: isTablet() === true ? 70 : 50,
	height: isTablet() === true ? 70 : 50,
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: 100
},

card2Content:{
	marginHorizontal: 10
},

card2Title:{
	fontSize: RFValue(17, screenHeight),
	fontWeight: 'bold',
	marginTop: 15,
	marginBottom: 5
},

card2SubTitle:{
	color: '#959595',
	fontSize: RFValue(17, screenHeight),
	marginBottom: 15
},

card3View:{
	width: screenWidth*0.32,
	marginLeft: 15
},

card3Content:{
	width: '100%',
	height: screenHeight*0.07,
	backgroundColor: '#333',
	borderRadius: RFPercentage(0.8),
	justifyContent: 'center',
	alignItems: 'center', 
},

card3Title:{
	fontSize: RFValue(17, screenHeight),
	fontWeight: 'bold',
},

card4View:{
	borderColor: '#333',
	borderWidth: 1,
	height: screenHeight*0.08,
	borderRadius: RFPercentage(0.8),
	marginBottom: 10,
	justifyContent: 'center',
	marginLeft: 10
},

card4Content:{
	flexDirection: 'row',
	alignItems: 'center',
	marginHorizontal: 15,
	position: 'relative' 
},

card4Image:{
	marginRight: 15,
	marginLeft: 5
},

card4Title:{
	fontSize: RFValue(17, screenHeight),
},

card4Icon:{
	color: '#ffffff',
	position: 'absolute',
	right: 0,
	opacity: 0.2
},

//////////////////////// HEADING

headingTitle:{
	fontWeight: 'bold',
	fontSize: RFValue(19, screenHeight)
},

headingButton:{
	flexDirection: 'row', 
	justifyContent: 'center',
	alignContent: 'flex-end',
	alignItems: 'center',
},

headingButtonIcon:{
	color: PrimaryColor,
},

headingButtonText:{
	fontWeight: 'bold',
	color: '#959595',
	fontSize: RFValue(17, screenHeight)
},

episodeBackground:{
	width: '100%',
	height: screenHeight*0.40,
	position: 'relative',
},

episodeOverlay:{
	width: '100%',
	height: screenHeight*0.40,
	backgroundColor: 'rgba(0,0,0,0.5)',
	position: 'absolute',
	alignItems: 'center',
	justifyContent: 'center',
	overflow: 'visible'
},

episodeContent:{
    paddingHorizontal: 30,
    paddingTop: 120,
	flex: 1,
	height: screenHeight
},

episodeTitle:{
	alignSelf: 'center',
	fontSize: RFValue(17, screenHeight),
	fontWeight: 'bold',
	marginBottom: 10
},

episodeDivider:{
	height: 3,
	width: 40,
	backgroundColor: PrimaryColor,
	alignSelf: 'center',
	marginBottom: 20
},

//////////////////////// MISC

TitleListHeader:{
	fontSize: RFValue(17, screenHeight),
},

TitleList:{
	color: '#ffffff',
},

IconList:{
	marginTop: 10,
},

FullHeightScreen:{
	width: '100%',
	paddingRight: 10,
	paddingVertical: 10,
	flex: 1,
	height: screenHeight
},

SearchScreen:{
	width: '100%',
	paddingRight: 10,
	paddingVertical: 10,
	marginBottom: 50,
	flex: 1,
},

FullHeightScreen2:{
	width: '100%',
	paddingHorizontal: 10,
	paddingVertical: 10,
	flex: 1,
	height: screenHeight
},

PageScreen:{
	width: '100%',
	paddingHorizontal: 25,
	paddingVertical: 30,
	flex: 1,
},

PageLogo:{
	width: '100%',
	height: screenHeight/22,
	maxHeight: '100%',
	marginBottom: 50,
},

JustifyMiddle:{
	justifyContent: 'center',
	alignContent: 'center',
	alignItems: 'center',
},

JustifyFlexStart:{
	alignItems: 'flex-start',
},

JustifyFlexEnd:{
	alignItems: 'flex-end',
},

LoadMore:{
	backgroundColor: '#333',
	borderRadius: RFPercentage(0.8),
	justifyContent: 'center',
	height: screenHeight*0.05,
	marginHorizontal: 20,
	alignItems: 'center', 
},

NoMoreItems:{
	height: 50,
	alignItems: 'center',
	justifyContent: 'center',
	borderRadius: RFPercentage(0.8),
	marginBottom: 60
}

});