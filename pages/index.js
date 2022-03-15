import Head from 'next/head'
import Image from 'next/image'
import {
  Container,
  Card,
  CardImage,
  CardTitle,
  CardPrice,
  CardLink,
  CardButton
} from '../styles/index.js'

const Home = () => {

  const number = "16981068071"

  return (
    <Container>
      <Card>
        <CardImage src="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2021/03/imagem_feed_03-5.png" />
        <CardTitle>Hot Dog Tradicional</CardTitle>
        <CardPrice>R$11,00</CardPrice>
        <CardLink href={`https://api.whatsapp.com/send?phone=${number}&text=Olá, meu pedido é um Hot Dog Tradicional.`}>
          <CardButton>Comprar</CardButton>
        </CardLink>
      </Card>
      <Card>
        <CardImage src="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2021/03/imagem_feed_03-5.png" />
        <CardTitle>Hot Dog Completo</CardTitle>
        <CardPrice>R$13,00</CardPrice>
        <CardLink href={`https://api.whatsapp.com/send?phone=${number}&text=Olá, meu pedido é um Hot Dog Completo.`}>
          <CardButton>Comprar</CardButton>
        </CardLink>
      </Card>
      <Card>
        <CardImage src="https://img.imageboss.me/consul/cdn/animation:true/wp-content/uploads/2021/03/imagem_feed_03-5.png" />
        <CardTitle>Hot Dog Completo Queijo</CardTitle>
        <CardPrice>R$15,00</CardPrice>
        <CardLink href={`https://api.whatsapp.com/send?phone=${number}&text=Olá, meu pedido é um Hot Dog Completo Queijo.`}>
          <CardButton>Comprar</CardButton>
        </CardLink>
      </Card>
    </Container >
  )
}

export default Home