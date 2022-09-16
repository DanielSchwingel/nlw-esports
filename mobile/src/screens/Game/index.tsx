import { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png'

import { iGameParams } from '../../@types/navigation'
import { Background } from '../../components/Background'
import { Heading } from '../../components/Heading'
import { DuoCard, iDuoCardProps } from '../../components/DuoCard'
import { DuoMatch } from '../../components/DuoMatch'

import { styles } from './styles'
import { THEME } from '../../theme'

export function Game() {
   const [ duos, setDuos ] = useState<iDuoCardProps[]>([])
   const [ discordDuoSelected, setDiscordDuoSelected ] = useState('')
   const route = useRoute()
   const navigation = useNavigation()
   const game = route.params as iGameParams

   useEffect(() => {
      fetch(`http://192.168.50.90:3333/games/${game.id}/ads`)
         .then(response => response.json())
         .then(data => setDuos(data))
   }, [])

   function handleGoBack() {
      navigation.goBack()
   }
 
   async function getDiscordUser(adsId: string) {
      fetch(`http://192.168.50.90:3333/ads/${adsId}/discord`)
         .then(response => response.json())
         .then(data => setDiscordDuoSelected(data.discord))
   }

   return (
      <Background>
         <SafeAreaView style={styles.container}>
            <View style={styles.header}>
               <TouchableOpacity>
                  <Entypo
                     name='chevron-thin-left'
                     color={THEME.COLORS.CAPTION_300}
                     size={20}
                     onPress={handleGoBack}
                  />
               </TouchableOpacity>
               <Image
                  source={logoImg}
                  style={styles.logo}
               />
               <View style={styles.rigth}/>
            </View>
            <Image
               source={{ uri: game.bannerUrl }}
               style={styles.cover}
               resizeMode='cover'
            />            
            <Heading
               title={game.title}
               subtitle='Conecte-se e comece a jogar!'
            />

            <FlatList
               data={duos}
               keyExtractor={item => item.id}
               renderItem={({item}) => (
                  <DuoCard
                     name={item.name}
                     id={item.id}
                     hourEnd={item.hourEnd}
                     hourStart={item.hourStart}
                     weekDays={item.weekDays}
                     useVoiceChannel={item.useVoiceChannel}
                     yearsPlaying={item.yearsPlaying}    
                     onConnect={()=> getDiscordUser(item.id)}     
                  />
               )}
               horizontal
               style={styles.containerList}
               contentContainerStyle={[duos.length !== 0 ? styles.contentList : styles.emptyListContent]}
               ListEmptyComponent={()=>(
                  <Text style={styles.emptyListText}>
                     Não há anúncios publicados ainda.
                  </Text>
               )}
            />

            <DuoMatch
               visible={discordDuoSelected.length > 0}
               discord={discordDuoSelected}
               onClose={() => setDiscordDuoSelected('')}
            />
         </SafeAreaView>
      </Background>
   )
}