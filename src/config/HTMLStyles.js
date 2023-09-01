import {Dimensions} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const screenHeight = Math.round(Dimensions.get('window').height);

export const HTMLStyles = {

	p: {fontWeight: '300',color: '#fff', fontSize: RFValue(17, screenHeight)},

    a: {fontWeight: '700', color: '#fff'}

}