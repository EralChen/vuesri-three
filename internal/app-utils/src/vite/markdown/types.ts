import type {
  ThemeRegistration,
  BuiltinTheme,
} from 'shikiji'

export type ThemeOptions =
  | ThemeRegistration
  | BuiltinTheme
  | {
      light: ThemeRegistration | BuiltinTheme
      dark: ThemeRegistration | BuiltinTheme
    }




export interface PropsOptions {
  componentsPath: string
}
    
export interface DemoOptions {
  root: string
}

export interface PreWrapperOptions {
  hasSingleTheme: boolean
}