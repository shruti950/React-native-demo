import { Dimensions } from "react-native";

export const getSansUITextFont = (variant = 'Regular') => {
    console.log("🚀 ~ file: index.js:4 ~ getSansUITextFont ~ `Product Sans ${variant}`:", `Product Sans ${variant}`)
    return `Product Sans ${variant}`;
};
const { width: _width, height: _height } = Dimensions.get('window');

export const width = Math.ceil(Math.min(_width, _height));
export const height = Math.ceil(Math.max(_width, _height));