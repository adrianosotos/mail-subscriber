import { Container, SwitchCheckbox, Sun, Moon, SwitchLabel, Input, SliderRound } from './style'
import { useState } from 'react'
import { useTheme } from '../../context/theme'

function Switch () {
  const { isDarkTheme, setIsDarkTheme } = useTheme()
  return (
    <Container>
      <Sun>☀︎</Sun>
      <SwitchCheckbox>
        <SwitchLabel>
          <Input type="checkbox" onChange={() => setIsDarkTheme(!isDarkTheme)} />
          <SliderRound />
        </SwitchLabel>
      </SwitchCheckbox>
      <Moon>☽</Moon>
    </Container>
  )
}
  
  export default Switch
