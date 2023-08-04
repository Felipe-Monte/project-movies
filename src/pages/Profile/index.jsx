import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <div className='header-icon'>
          <FiArrowLeft />
          <a href="#">Voltar</a>
        </div>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Felipe-Monte.png" alt="imagem do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id='avatar' />
          </label>
        </Avatar>

        <Input type='text' icon={FiUser} placeholder='Nome' />
        <Input type='email' icon={FiMail} placeholder='Email' />
        <Input type='password' icon={FiLock} placeholder='Senha atual' />
        <Input type='password' icon={FiLock} placeholder='Nova senha' />

        <Button title='Salvar' />
      </Form>
    </Container>
  )
}