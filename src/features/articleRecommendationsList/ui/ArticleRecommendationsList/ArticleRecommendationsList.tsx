import { classNames } from '@/shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from '@/shared/ui/Text'
import { ArticleList } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffects } from '@/shared/lib/hooks/useInitialEffects/useInitialEffects'
import { VStack } from '@/shared/ui/Stack'
import { useArticleRecomendationsList } from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { isLoading, data, error } = useArticleRecomendationsList(3)

  if (isLoading || error || !data) {
    return null
  }
  return (
    <VStack gap={'8'} classname={classNames('', {}, [className])}>
      <Text title="Рекомендуем" classname={''} />
      <ArticleList articles={data} isLoading={isLoading} />
    </VStack>
  )
})
