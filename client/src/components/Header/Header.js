import { Container } from './style'
import Switch from '../Switch/Switch'
import { useState } from 'react'

function Header () {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <Container>
      Header
      <Switch 
        id="test-switch"
        toggled={isToggled}
        onChange={e => setIsToggled(e.target.checked)}
      />
    </Container>
  )
}

export default Header
