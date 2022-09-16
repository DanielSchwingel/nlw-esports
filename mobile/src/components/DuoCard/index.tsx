import { TouchableOpacity, View, Text } from 'react-native'
import { GameController } from 'phosphor-react-native'

import { DuoInfo } from '../DuoInfo'

import { THEME } from '../../theme'
import { styles } from './styles'

export interface iDuoCardProps {
   hourStart: string
   hourEnd: string
   id: string
   name: string
   useVoiceChannel: boolean
   weekDays: string[]
   yearsPlaying: number
   onConnect: () => void
}

export function DuoCard({ hourStart, hourEnd, id, name, useVoiceChannel, weekDays, yearsPlaying, onConnect }: iDuoCardProps) {
   return (
      <View style={styles.container}>
         <DuoInfo
            label='Nome:'
            value={name}
         />

         <DuoInfo
            label='Tempo de jogo:'
            value={`${yearsPlaying} ano(s)`}
         />

         <DuoInfo
            label='Disponibilidade:'
            value={`${weekDays.length} dia(s) \u2022 ${hourStart} - ${hourEnd}`}
         />

         <DuoInfo
            label='Chamada de Áudio:'
            value={useVoiceChannel ? 'Sim' : 'Não' }
            colorValue={useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT }
         />

         <TouchableOpacity
            style={styles.button}
            onPress={onConnect}
         >
            <GameController
               color={THEME.COLORS.TEXT}
               size={20}
            />
            <Text style={styles.buttonTitle}>
               Conectar
            </Text>
         </TouchableOpacity>
      </View>
   )
}