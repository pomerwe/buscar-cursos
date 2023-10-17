import CourseCard from "./components/courseCard"

const data: any[] = [
  {
    name: "Fórmula Negócio Online",
    link: "https://go.hotmart.com/X87165451F",
    image: "/fno.png"
  },
  {
    name: "Viver de Youtube",
    link: "https://go.hotmart.com/K86750849Y",
    image: "/viveryoutube.png"
  },
  {
    name: "Projeto Magra Decidida",
    link: "https://go.hotmart.com/Y87155547D",
    image: "/projetomagra.png"
  },
  {
    name: "Inglês com a Gringa",
    link: "https://go.hotmart.com/X86575190S",
    image: "/inglescomagringa.png"
  }
]

var count = 0;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-48">
      <div className="grid grid-cols-4 gap-4 justify-between text-center">
        {data.map((d) => {
          count++
          return (
            <CourseCard 
                key = {count}
                name = {d.name}
                link = {d.link}
                image= {d.image}
              />)})}
      </div>
    </main>
  )
}
