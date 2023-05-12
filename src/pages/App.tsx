import Notebook from '../components/Notebook'
import '../styles/App.css'
import quotes from '../lib/data/quotes.json'
import colors from '../lib/data/colors.json'
import { useState } from 'react'
import { Quote } from '../lib/interfaces/quote'
import { Color } from '../lib/interfaces/colors'

function App() {
  const [quote, setQuote] = useState<Quote>(
    quotes[Math.floor(Math.random() * quotes.length)]
  )
  const [color, setColor] = useState<Color>(
    colors[Math.floor(Math.random() * colors.length)]
  )

  const ramdomData = (): void => {
    const ramdomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    const ramdomColor = colors[Math.floor(Math.random() * colors.length)]
    setQuote(ramdomQuote)
    setColor(ramdomColor)
  }

  return (
    <main style={{ backgroundColor: color?.color }} className='main'>
      <Notebook ramdomData={ramdomData} quote={quote} color={color} />
    </main>
  )
}

export default App
