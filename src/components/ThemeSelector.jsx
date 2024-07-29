import { useTheme } from '../hooks/useTheme'
import './ThemeSelector.css'
import mode_icon from '../assets/brightness_6_24dp_FILL0_wght400_GRAD0_opsz24.svg'

export default function ThemeSelector() {
    const colors = ['purple', 'green', 'blue']
    const {changeColor, changeMode, mode} = useTheme()

    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark")
    }
    
    console.log(mode)

  return (
    <div className='selector'>
        <div className='mode'>
            <img src={mode_icon} alt="mode light/dark"
                onClick={() => {toggleMode()}}
                style={{filter: mode === "light" ? "invert(100%)" : "invert(20%)"}}
            />
        </div>
        {colors.map(color => (
            <div 
                key={color}
                className='colorSelector'
                onClick={() => {changeColor(color)}}
                style={{background: color}}

            />
        ))}
    </div>
  )
}
