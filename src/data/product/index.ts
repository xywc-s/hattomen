export interface IProduct {
  name: string,
  title: string,
  ratings: number,
  price: number,
  points: Array<string>,
  images: Array<string>,
  reviews: Array<IReview>,
  details: {
    headImg: string,
    features: Array<IFeature>
  }
}

export interface IReview {
  rating: number,
  date: string,
  title: string,
  content: string
}

interface IFeature {
  title: string,
  desc: string,
  img: string
}

interface IProducts {
  [index:string]: IProduct
}

import BypassLopper from './bypass-lopper'

const Products: IProducts = {
  'bypass-lopper': BypassLopper
}
export { Products }

