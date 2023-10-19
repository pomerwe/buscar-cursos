import { Bonus, Card } from "./components/cardClass";
import CourseCard from "./components/courseCard"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin']});

const data: Card[] = [
  new Card(
  "Fórmula Negócio Online", 
  "https://go.hotmart.com/X87165451F",
  "/fno.png", 
  "É o treinamento mais completo para Criar Seu Negócio Online a Partir do Zero!  Alex Vargas te leva passo a passo em cada etapa. Funciona mesmo se você for iniciante sem nenhum conhecimento!",
  [
    new Bonus("Bônus Premium Exclusivo"),
    new Bonus("Suporte Premium Ilimitado"),
    new Bonus("Acesso Imediato"),
    new Bonus("Aulas 100% atualizadas"),
    new Bonus("Acesso completo por 1 ano"),
    new Bonus("Garantia de 7 dias"),
  ] 
  ),
  new Card(
    "Viver de Youtube", 
    "https://go.hotmart.com/K86750849Y",
    "/viveryoutube.png", 
    "É o treinamento mais completo para se tonar um youtuber de sucesso! Aprenda com o Expert em negócios digitais Peter Jordan. Com Anos de experiência em ser youtuber e dono do Ei Nerd!" ,
    [] 
  ),
  // new Card(
  //   "Projeto Magra Decidida", 
  //   "https://go.hotmart.com/Y87155547D",
  //   "/projetomagra.png", 
  //   "É o treinamento mais completo para Criar Seu Negócio Online a Partir do Zero!  Alex Vargas te leva passo a passo em cada etapa. Funciona mesmo se você for iniciante sem nenhum conhecimento!" ,
  //   [] 
  // ),
  // new Card(
  //   "Inglês com a Gringa", 
  //   "https://go.hotmart.com/X86575190S",
  //   "/inglescomagringa.png", 
  //   "É o treinamento mais completo para Criar Seu Negócio Online a Partir do Zero!  Alex Vargas te leva passo a passo em cada etapa. Funciona mesmo se você for iniciante sem nenhum conhecimento!" ,
  //   [] 
  // )
]

var count = 0;
export default function Home() {
  return (
    <main className={montserrat.className + "min-h-screen text-center text-default-blue"}>
      <div className="flex flex-row items-center justify-center">
        <img src="/logo.png" className="w-screen sm:hidden"></img>
        <img src="/logo-land.png" className="w-screen hidden sm:block"></img>
      </div>
      <div className="flex flex-row items-center justify-center gap-6 sm:gap-12 ring-offset-2 ring-2 mb-8 px-6 py-1">
        <div>
          Início
        </div>
        <div>
          Categorias
        </div>
        <div>
          Quem Somos
        </div>
        <div>
          Aulas Gratuitas
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid lg:grid-cols-4 lg:gap-4 sm:grid sm:grid-cols-2 sm:gap-4 justify-between text-center lg-8 mb-8">
        {data.map((d) => {
          count++
          return (
            <CourseCard 
                key = {count}
                name = {d.name}
                link = {d.link}
                image = {d.image}
                description = {d.description}
                bonuses = {d.bonuses}
              />)})}
      </div>
    </main>
  )
}
