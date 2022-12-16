import { Button, Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home(){ //default fará uma export que não seja necessário uso de chaves

    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('');

    function handleParticipantAdd(){
        if(participants.includes(participantName)){
            return Alert.alert("Participante existente", "Esse participante já foi cadastrado!")
        }
        
        setParticipants(prevState => [...prevState ,participantName]);
        setParticipantName('')
    }

    function handleParticipantRemove(name: string){
        let answer = Alert.alert('Remoção de participante', `Tem certeza que deseja remover o participante ${name} da lista?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter(participant => participant !== name));
                    Alert.alert('Informe',`O participante ${name} foi removido da lista.`)
                }
            },
        ])
    }
    
    // function handleStates(value: string){
    //     setParticipantName(value)
    //     console.log(participantName)
    // }
  
    return(
    <View style={styles.container}>
        <TextInput
        style={styles.eventName}
        placeholder= "Nome do evento"
        placeholderTextColor={"#1f1e25"}
        autoCapitalize="sentences"
        />
        <TextInput
        style={styles.eventDate}
        placeholder= "Data do evento"
        placeholderTextColor={"#1f1e25"}
        autoCapitalize="sentences"
        />
      <View style= {styles.form}>
        <TextInput
        style={styles.input}
        placeholder= "Nome do participante"
        placeholderTextColor={"#AAA"}
        keyboardType="email-address"
        autoCapitalize="words"
        onChangeText={setParticipantName}
        value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} >
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
                    <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
            <Text style={styles.listEmpty}>
                Ninguém chegou ainda :c ? Adicione participantes a lista de presença :D
            </Text>
        )}
        />  
    </View>
  )
}