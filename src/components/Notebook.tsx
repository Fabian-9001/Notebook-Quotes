import { Color } from '../lib/interfaces/colors'
import { Quote } from '../lib/interfaces/quote'
import Button from './Button'

export interface INotebook {
  ramdomData: () => void
  quote: Quote
  color: Color
}

const Notebook: React.FC<INotebook> = ({ ramdomData, quote, color }) => {
  return (
    <div className='notebook__container'>
      <div className='notebook__loin'>
        <div className='notebook__gap'>
          <div className='notebook__spring'></div>
        </div>
      </div>
      <div className='notebook__page'>
        <p className='notebook__quote' style={{ color: color.color }}>
          {quote.quote}
        </p>
        <div className='notebook__line'></div>
        <div className='notebook__corner'>
          <Button style={{ backgroundColor: color.color }} onClick={ramdomData}>
            &#62;
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Notebook
