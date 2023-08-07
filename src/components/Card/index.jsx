import { Container } from './styles'

import { Tag } from '../../components/Tag'

import { Star } from '../Star'

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      <Star rate={3} />

      <p>{data.text}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container >
  )
}