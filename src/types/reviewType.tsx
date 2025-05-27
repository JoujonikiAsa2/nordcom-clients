export type Review = {
  id: string;
  rating: string;
  title: string;
  author: string;
  date: string;
  verified: boolean;
  content: string;
};

export type ReviewType = {
    reviews: Review[];
    averageRating: number;
    totalReviews: number;
    platform: string;
    productId: string;
    };
