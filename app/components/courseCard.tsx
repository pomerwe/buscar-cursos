'use client';
import Image from 'next/image'
import { Card } from './cardClass';

const uuid = require('uuid');

export default function CourseCard(card: Card) {
    return (
          <div className= "flex flex-col rounded-lg bg-white items-center px-7">
            <div className= "w-full border-t-8 border-default-blue">
              <Image 
                  src={card.image}
                  alt={card.name}
                  width={1000}
                  height={341}
                  className='mx-auto border-x border-default-blue'
                />
            </div>
            <div className="mx-auto border-x border-default-blue px-4 text-center">
              <p className='text-black font-semibold py-2'>{card.name}</p>
              <p className="text-black text-justify py-2">
                {card.description}
              </p>
            </div>
            <div className="mx-auto border-x border-default-blue px-2 text-center text-black py-2 text-xs w-full">
              <ul className="list-disc grid grid-cols-2 gap-x-6 pl-4 text-left">
                {card.bonuses.map((b) => (<li key={uuid.v4()}>{b.description}</li>))}
              </ul>
            </div>
            <div className= "w-full">
              <button onClick={() => location.href = card.link} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 w-full" >
                Acessar Site
              </button>
            </div>
          </div>  
        )
  }