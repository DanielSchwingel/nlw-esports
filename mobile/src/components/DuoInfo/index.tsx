import { ColorValue, Text, View } from 'react-native'

import { THEME } from '../../theme'
import { styles } from './styles'

interface iDuoInfoProps {
   label: string
   value: string
   colorValue?: ColorValue
}

export function DuoInfo({ label, value, colorValue = THEME.COLORS.TEXT }: iDuoInfoProps) {
   return (
      <View style={styles.container}>
         <Text style={styles.label}>
            {label}
         </Text>
         <Text 
            numberOfLines={1}
            style={[styles.value, { color: colorValue }]}
         >
            {value}
         </Text>
      </View>
   )
}