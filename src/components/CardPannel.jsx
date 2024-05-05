import { useEffect, useState } from "react"
import axios from 'axios'
import Card from "./Card"


function CardPannel() {
    const [cardData, setCardData] =useState([])

    useEffect(() => {
        const getData = async () => {
          const { data } = await axios('services.json')
          setCardData(data)
          console.log(data)
        }
        getData()
      }, [])
    
  return (
    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3  py-10 mx-auto container'>
            {
                cardData.map(card=><Card key={card._id} card={card}></Card>)
            }
          </div>
  )
}

export default CardPannel