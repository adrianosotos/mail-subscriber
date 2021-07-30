import { Container, Logo } from './style'
import Switch from '../Switch/Switch'
import { useState } from 'react'

function Header () {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <Container>
      <Logo>User Subscribe</Logo>
      <Switch 
        id="test-switch"
        toggled={isToggled}
        onChange={e => setIsToggled(e.target.checked)}
      />
    </Container>
  )
}

export default Header
