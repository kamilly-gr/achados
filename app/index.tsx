
import { Text, View,  FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const objetos = [
  {
    id: 1,
    nome: "Mochila preta Adidas",
    complemento: "Quadra de esportes - ADM",
    image: "🎒"
  },
  {
    id: 3, 
    nome:"Chaveiro com chaves",
    complemento: "Biblioteca - Encontrado",
    image:"🔑"
  },
  {
    id: 2,
    nome: "Fone de ouvido",
    complemento: "Sala 12 - Meca",
    image:"📱"
  },
]


export default function Index() {
  return (

    <SafeAreaView>
      <View style={style.container}>
        <Text style={style.title1}>Achados</Text>
        <Text style={style.title1}>& <Text style={style.title2}>Perdidos</Text></Text>

        <Text style={style.subtitle}>SENAI - Ricardo Lerner - 3 itens ativos</Text>

        <View style={style.filtros}>
          <Text style={style.filtro1}>Todos</Text>
          <Text style={style.filtro2}>Perdidos</Text>
          <Text style={style.filtro2}>Encontrados</Text>
          <Text style={style.filtro2}>Retirados</Text>
        </View>



        <FlatList 
        contentContainerStyle={style.movieList}
        data={objetos} 
        renderItem ={(({item}) => (
          <View style={style.item}>
            <View>
              <Text style={style.imagem}>{item.image}</Text>
            </View>
            <View>
              <Text style={style.movieTitle}>{item.nome}</Text>
              <Text style={style.complemento}>{item.complemento}</Text>
            </View>

          </View>
          
        ))}> 
        
        </FlatList>
      </View>
    </SafeAreaView>
  );
}


const style = StyleSheet.create({
  container:{
    paddingHorizontal: 40,
    paddingTop:25
  },

  title1:{
    fontSize: 25, 
    marginBottom: -8
  },

  title2:{
    fontSize:25,
    
    color:"#e70505",
    fontStyle:"italic",
  },

  subtitle:{
    color:"#9a9488",
    marginTop:15,
    fontWeight: 500
  },

  filtros:{
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    marginTop: 10, 
    marginBottom: 12,
  },

  filtro1:{
    textAlign: "center",
    backgroundColor:"#000",
    color:"#ffffff",
    borderRadius: 15,
    fontWeight: 500,
    
    paddingHorizontal: 15,
    paddingVertical:5
  },
  
  filtro2:{
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor:"#dfdbd3",
    paddingHorizontal: 15,
    paddingVertical:5,

    color:"#9a9488",
    fontWeight: 500,
  },

  movieList:{
    gap: 12
  },
  
  item: {
    
    marginTop:12,
    borderColor:"#dfdbd3",
    borderWidth: 0.5,
    borderRadius: 15,

    flexDirection:"row",
    alignItems:"center",
    gap: 10,
    
    paddingHorizontal: 10,
    paddingVertical: 10
  },

  complemento: {
      color:"#9a9488",
      fontSize: 12,
      fontWeight: 500,
  },

  movieTitle: {
    fontSize:17
  },

  imagem:{
    fontSize: 35,
    padding: 10,
    backgroundColor:"#ede9e2",
    borderRadius: 10,
  },
})