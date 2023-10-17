import Link from 'next/link'
import Image from 'next/image'

export default function CourseCard({
    name,
    link,
    image
  }: {
    name: string,
    link: string,
    image: string
  }) {
    return (
        <div className= "">
          <div className= "flex flex-col ring-1 ring-gray-900/5 p-4 rounded-lg shadow-xl bg-white items-center">
            <div className= "">
              <Image 
                  src={image}
                  alt={name}
                  width={200}
                  height={200}
                  className='border border-gray-900/5 rounded-lg max-h-52 min-h-52'
                />
            </div>
            <div className= "my-2">
              <p className="text-sky-500 font-bold break-all">{name}</p>
            </div>
            <div className= "my-2">
              <Link href={link} className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-10 rounded" >
                Acessar Site
              </Link>
            </div>
          </div>
        </div>
    )
  }