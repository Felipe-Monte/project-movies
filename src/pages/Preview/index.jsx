import { Container } from './styles'
import { FiClock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Star } from '../../components/Star'
import { Tag } from '../../components/Tag'

export function Preview() {
  return (
    <Container>
      <Header />

      <main>
        <a href="#"><FiArrowLeft />Voltar</a>

        <div className='header-preview'>
          <h1>Interestelar</h1>
          <Star rate={3} />
        </div>

        <span><FiUser />Por Carlos Felipe</span> <span><FiClock />23/05/22 às 08:00</span>

        <section className='section-tags'>
          <Tag title='Romance' />
          <Tag title='Comédia' />
          <Tag title='Infantil' />
        </section>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, ea! Eius eos esse tempore facere harum minus eligendi ipsa explicabo doloribus repellendus impedit voluptates, voluptatem dolor vero consequatur officia vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum nam odit dolor, minima assumenda veniam esse libero eligendi a, eum maxime numquam error exercitationem rerum quaerat quod, iure soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur vel fuga quos perferendis blanditiis asperiores nostrum soluta. Sapiente, quo. Debitis assumenda voluptas non expedita fugit ab pariatur aperiam tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, ea! Eius eos esse tempore facere harum minus eligendi ipsa explicabo doloribus repellendus impedit voluptates, voluptatem dolor vero consequatur officia vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum nam odit dolor, minima assumenda veniam esse libero eligendi a, eum maxime numquam error exercitationem rerum quaerat quod, iure soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur vel fuga quos perferendis blanditiis asperiores nostrum soluta. Sapiente, quo. Debitis assumenda voluptas non expedita fugit ab pariatur aperiam tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, ea! Eius eos esse tempore facere harum minus eligendi

        </p>
        <br />
        <p>
          ipsa explicabo doloribus repellendus impedit voluptates, voluptatem dolor vero consequatur officia vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum nam odit dolor, minima assumenda veniam esse libero eligendi a, eum maxime numquam error exercitationem rerum quaerat quod, iure soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur vel fuga quos perferendis blanditiis asperiores nostrum soluta. Sapiente, quo. Debitis assumenda voluptas non expedita fugit ab pariatur aperiam tempore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, ea! Eius eos esse tempore facere harum minus eligendi ipsa explicabo doloribus repellendus impedit voluptates, voluptatem dolor vero consequatur officia vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nostrum nam odit dolor, minima assumenda veniam esse libero eligendi a, eum maxime numquam error exercitationem rerum quaerat quod, iure soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consectetur vel fuga quos perferendis blanditiis asperiores nostrum soluta. Sapiente, quo. Debitis assumenda voluptas non expedita fugit ab pariatur aperiam tempore.
        </p>
      </main>

    </Container>
  )
}