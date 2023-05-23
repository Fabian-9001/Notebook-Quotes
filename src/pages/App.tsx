import '../styles/App.css'
import Notebook from '../components/Notebook'
import quotes from '../lib/data/quotes.json'
import colors from '../lib/data/colors.json'
import { useState } from 'react'
import { IColor, IQuote } from '../lib/interfaces/notebook'

function App() {
  const [quote, setQuote] = useState<IQuote>(quotes[ramdomIndex(quotes)])
  const [color, setColor] = useState<IColor>(colors[ramdomIndex(colors)])

  function ramdomIndex(list: IColor[] | IQuote[]) {
    const index = Math.floor(Math.random() * list.length)
    return index
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
