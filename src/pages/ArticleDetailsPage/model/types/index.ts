import { type ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema'
import { type ArticleDetailsPageRecommendationsSchema } from './articleDetailsPageRecommendationsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema
  recommendations: ArticleDetailsPageRecommendationsSchema
}
