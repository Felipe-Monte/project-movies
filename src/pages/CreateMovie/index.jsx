import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'

import { TagItem } from '../../components/TagItem'
import { Button } from '../../components/Button'

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

        <Textarea placeholder='Observações' />

        <h2>Marcadores</h2>

        <section>
          <TagItem value='React' />
          <TagItem value='Nodejs' isNew />
          <TagItem value='Nodejs' />
        </section>

        <div className='button-area'>
          <Button title='Excluir filme'/>
          <Button title='Salvar alterações'/>
        </div>

      </main>
    </Container>
  )
}