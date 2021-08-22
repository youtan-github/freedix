import React from 'react'
import {View, Text, StyleSheet, Dimensions, TextInput, Modal, Keyboard, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
const H = Dimensions.get('window').height
const W = Dimensions.get('window').width
const color1 = "#C73030"
const MainScreen =()=>{
    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.main}>
           <View style={styles.header}>
           <Icon onPress={()=>{}} name="menu-sharp" size={40} color={color1} />
            <View style={styles.mainTextBox}>
            <Text style={styles.mainTitle}>FREEDIX</Text>
            </View>
           </View>

           <View style={styles.searchBox}>
                <TextInput
                    style={styles.searchTextBox}
                    placeholder="A word here ..."
                    placeholderTextColor={color1}
                />

                <TouchableOpacity activeOpacity={0.3} style={styles.circleButton}>
                <Icon  name="search" size={30} color={"#fff"} />

                </TouchableOpacity>
           </View>

            <Modal
                visible={true}
                animationType="fade"
                transparent={true}
                backgroundColor="red"
                style={{backgroundColor:'red'}}
            >
                <TouchableWithoutFeedback onPress={()=>{}}>
                <View  style={{justifyContent:'center', alignItems:'center', width:'100%', height:'100%', backgroundColor:'rgba(0,0,0, 0.5)'}}>
                    <TouchableWithoutFeedback onPress={()=>{}} >
                             <View style={{backgroundColor:'rgba(255,255,255,0.8)', width:'80%', height:'80%', borderRadius:10}}> 

                             </View>
                    </TouchableWithoutFeedback>
                    
                </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
        </TouchableWithoutFeedback>

        
    )
}


const styles = StyleSheet.create({
    circleButton:{
        width: '14%',
        height:55,
        backgroundColor:color1,
        borderRadius:33,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12, 
    },
    searchTextBox:{
        width:'75%',
        height:65,
        paddingVertical:5,
        paddingHorizontal:15,
        borderWidth:4,
        borderRadius:22,
        borderColor:color1,
        color:color1,
        fontSize:20,
        
        
    },
    searchBox:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        
    },
    
    mainTextBox:{
        width:'75%',
        alignItems:'center',
        justifyContent:'center',
      
    },
    mainTitle:{
        fontSize:33,
        fontWeight:'bold',
        color:color1
    },
    
    header:{
        height:'15%',
        // backgroundColor:'red',
    
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'space-around'
    },
    main:{
        height:H,
        width:W,
        padding:12,
        // alignItems:'center',
        backgroundColor:'gold'
    }
    
})

export default MainScreen
