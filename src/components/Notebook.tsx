import { INotebook } from '../lib/interfaces/notebook'
import Button from './Button'

const Notebook: React.FC<INotebook> = ({ changeStyles, quote, color }) => {
  return (
    <article className='notebook__container'>
      <figure className='notebook__loin'>
        <figure className='notebook__gap'>
          <figure className='notebook__spring'></figure>
        </figure>
      </figure>
      <div className='notebook__page'>
        <h1 className='notebook__content'>
          <span className='notebook__quote' style={{ color: color.color }}>
            “{quote.quote}”
          </span>
          <span
            className='notebook__quote__author'
            style={{ color: color.color }}
          >
            {quote.author}
          </span>
        </h1>
        <figure className='notebook__line'></figure>
        <figure className='notebook__corner'>
          <Button
            style={{ backgroundColor: color.color }}
            onClick={changeStyles}
          >
            &#62;
          </Button>
        </figure>
      </div>
    </article>
  )
}

export default Notebook
