import unocss from 'unocss/vite'
import { presetAttributify, presetWind } from 'unocss'
import { presetFlex, presetFont, presetGap } from 'unocss-preset-vunk'
import { vunkPresetsTheme, vunkPresetsShortcuts, unoThemeColors } from '../theme'

export const unocssPreferences = () => {
  return unocss({
    presets: [
      presetAttributify(),
      presetWind(),
      presetFont({
        theme: {
          ...vunkPresetsTheme.baseFontSize,
          ...vunkPresetsTheme.namedFontSize,
        },
      }),
      presetGap({
        theme: {
          ...vunkPresetsTheme.baseGap, 
          ...vunkPresetsTheme.namedGap,
        },
      }),
      presetFlex({
        prefix: 'sk',
      }),
    
    ],
    shortcuts: {
      ...vunkPresetsShortcuts,
    },


    theme: {
      colors: {
        ...unoThemeColors,
       
      },
    },
  })

}
