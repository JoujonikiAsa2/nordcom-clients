interface ProductCardProps {
  title: string
  brand?: string
  rating?: number
  reviews?: number
  price: number
  stock?: number
  isFeatured?: boolean
  originalPrice?: number
  deliveryDate?: string
  imageUrl?: string
  isNew?: boolean
  discount?: number
}

export default ProductCardProps