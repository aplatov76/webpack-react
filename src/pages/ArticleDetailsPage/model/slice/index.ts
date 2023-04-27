import { combineReducers } from '@reduxjs/toolkit'
import { reducer as recommendationsReducer } from './articleDetailsPageRecommendationsSlice'
import { reducer as commentsReducer } from './articleDetailsCommentSlice'

export const articleDetailsPageReducer = combineReducers({
  recommendations: recommendationsReducer,
  comments: commentsReducer
})
