import { INotebook } from '../lib/interfaces/notebook'
import Button from './Button'

const Notebook: React.FC<INotebook> = ({ changeStyles, quote, color }) => {
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
          <Button
            style={{ backgroundColor: color.color }}
            onClick={changeStyles}
          >
            &#62;
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Notebook
