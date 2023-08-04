import { Container, Content } from "./styles";
import { FiPlus } from 'react-icons/fi'

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <div>
            <h2>Meus filmes</h2>
            <Button title='Adicionar filmes' icon={FiPlus}/>
          </div>

        </Content>
      </main>
    </Container>
  )
}