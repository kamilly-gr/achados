import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Itempage(){
    return(
        <View>
            <Text>Perdido</Text>
            <Link href={"/"}>
                <Text>Não é esse o perdido! Voltar aos perdidos!</Text>
            </Link>
        </View>
    )
}