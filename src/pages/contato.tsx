import { Header } from "../components/Header"


export default function Contatos({ numero }) {
  return (
    <div>
      <Header />
      {numero}
    </div>
  )
}


export function getStaticProps() {

  return {
    props: {
      numero: Math.random()
    },
    revalidate: 10
  }
}