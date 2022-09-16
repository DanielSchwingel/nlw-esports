import { TouchableOpacity, TouchableOpacityProps, ImageBackground, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { THEME } from '../../theme'

import { styles } from './styles'

export interface iGameCardProps extends TouchableOpacityProps {
   id: string
   title: string
   _count: {
      ads: number
   }
   bannerUrl: string
}

export function GameCard({ id, title, _count, bannerUrl, ...rest }: iGameCardProps) {

   return (
      <TouchableOpacity style={styles.container} {...rest}>
         <ImageBackground
            style={styles.cover}
            source={{uri: bannerUrl}}
         >
            <LinearGradient
               colors={THEME.COLORS.FOOTER}
               style={styles.footer}
            >
               <Text style={styles.name}>
                  {title}
               </Text>
               <Text style={styles.ads}>
                  {_count.ads} anúncio(s)
               </Text>
            </LinearGradient>
         </ImageBackground>
      </TouchableOpacity>
   )

}