export interface INotebook {
  changeStyles: () => void
  quote: IQuote
  color: IColor
}

export interface IQuote {
  quote: string
  author: string
}

export interface IColor {
  color: string
}
