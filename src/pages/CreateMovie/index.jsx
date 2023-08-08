import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <main>
        <a href="#"><FiArrowLeft />Voltar</a>
        <h1>Novo filme</h1>

        <div>
          <Input type='text' placeholder='Título' />
          <Input type='text' placeholder='Sua nota (0 à 5)' />
        </div>

        <Textarea placeholder='Observações'/>

      </main>
    </Container>
  )
}