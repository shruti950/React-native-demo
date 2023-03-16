import { getSansUITextFont } from ".";
import { Colors } from "./colors";
import { Matrics } from "./matrics";



export const commonStyles = {

    row: {
        flexDirection: "row"
    },
    rSpaceCent: {
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    },
    med14: {
        fontFamily: getSansUITextFont("Medium"),
        fontSize: Matrics.ms14
    },
    flex: {
        flex: 1
    },
    med16: {
        fontFamily: getSansUITextFont("Medium"), fontSize: Matrics.ms16
    },
    medRed16: function () {
        return { ...this.med16, color: Colors.RED }
    },
    rowCenter:{
        flexDirection: "row", alignItems: "center"
    },
    medLightGray14:function () {
        return { ...this.med14, color: Colors.LIGHTGRAY }
    },
    rowSpaceBet:{
        flexDirection: "row", justifyContent: "space-between"
    }

}