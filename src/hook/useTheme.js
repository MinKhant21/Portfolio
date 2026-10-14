import { useContext } from 'react' // Removed 'React' since it was unused
import { ThemeContext } from '../contexts/ThemeContext'

export default function useTheme() {
     let contexts = useContext(ThemeContext)
     
     // Changed '==' to '===' and fixed the logic
     if (typeof contexts === 'undefined') {
         throw new Error('useTheme must be used within a ThemeProvider')
     }
     
     return contexts
}