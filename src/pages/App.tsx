import Notebook from '../components/Notebook'
import '../styles/App.css'
import quotes from '../lib/data/quotes.json'
import colors from '../lib/data/colors.json'
import { useState } from 'react'
import { IColor, IQuote } from '../lib/interfaces/notebook'

function App() {
  const [quote, setQuote] = useState<IQuote>(quotes[0])
  const [color, setColor] = useState<IColor>(colors[0])

  const ramdomIndex = (list: IColor[] | IQuote[]) => {
    const ramdom = Math.floor(Math.random() * list.length)
    return ramdom
  }

  const changeStyles = () => {
    setQuote(quotes[ramdomIndex(quotes)])
    setColor(colors[ramdomIndex(colors)])
  }

  return (
    <main style={{ backgroundColor: color.color }} className='main'>
      <Notebook changeStyles={changeStyles} quote={quote} color={color} />
    </main>
  )
}

export default App
