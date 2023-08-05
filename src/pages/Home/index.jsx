import { Container, Content } from "./styles";
import { FiPlus } from 'react-icons/fi'

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />

      <div>
        <h2>Meus filmes</h2>
        <Button title='Adicionar filmes' icon={FiPlus} />
      </div>

      <main>
        <Content>
          <Card data={{
            title: "Interestellar",
            text: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se quarto está assombrado por um fantasma que tenta se comunicar.",
            tags: [
              { id: "1", name: "Ficção científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" }
            ]
          }} />
          <Card data={{
            title: "Interestellar",
            text: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se quarto está assombrado por um fantasma que tenta se comunicar.",
            tags: [
              { id: "1", name: "Ficção científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" }
            ]
          }} />
          <Card data={{
            title: "Interestellar",
            text: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se quarto está assombrado por um fantasma que tenta se comunicar.",
            tags: [
              { id: "1", name: "Ficção científica" },
              { id: "2", name: "Drama" },
              { id: "3", name: "Família" }
            ]
          }} />
        </Content>
      </main>
    </Container>
  )
}