import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'

import { Container, Form, Background } from './style'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} type='email' placeholder='Nome' />
        <Input icon={FiMail} type='email' placeholder='Email' />
        <Input icon={FiLock} type='password' placeholder='Senha' />
        <Button title='Cadastrar' />

        <div className='container-link'>
          <FiArrowLeft />
          <a href="#">Voltar para login</a>
        </div>
      </Form>

      <Background />
    </Container>
  )
}