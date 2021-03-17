export interface IProduct {
  name: string,
  category: string,
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

export interface IFeature {
  title: string,
  desc: string,
  img: string
}

export interface IProducts {
  [index:string]: IProduct
}

import BypassLopper from './bypass-lopper'
import ElectricGardenTiller from './electric-garden-tiller'
import ElectricLawnMower from './electric-lawn-mower'
import ElectricSnowBlower from './electric-snow-blower'
import GardenCart from './garden-cart'
import HedgeShears from './hedge-shears'

export const Products: IProducts = {
  'bypass-lopper': BypassLopper,
  'hedge-shears': HedgeShears,
  'garden-cart': GardenCart,
  'electric-snow-blower': ElectricSnowBlower,
  'electric-lawn-mower': ElectricLawnMower,
  'electric-garden-tiller': ElectricGardenTiller
}
