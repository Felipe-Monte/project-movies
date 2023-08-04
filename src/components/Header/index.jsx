import { Container, Logout } from './styles'

import { Input } from "../../components/Input";

export function Header() {
  return (
    <Container>
      <h1>Rocktmovies</h1>
      <Input placeholder='Pesquisar por titulo' />


      <Logout>
        <div>
          <strong>Carlos Felipe</strong>
          <span>Sair</span>
        </div>
        <img src="https://github.com/Felipe-Monte.png" alt="imagem do usuário" />
      </Logout>
    </Container>
  )
}