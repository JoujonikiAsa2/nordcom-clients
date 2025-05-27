interface ProductCardProps {
  title: string
  brand: string
  rating: number
  reviews: number
  price: number
  originalPrice?: number
  deliveryDate: string
  imageUrl?: string
  isNew?: boolean
  discount?: string
}

export default ProductCardProps