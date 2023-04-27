/* eslint-disable @typescript-eslint/array-type */
import { ArticleSortField } from '@/entities/Article/model/types/article'
import { classNames } from '@/shared/lib/classNames'
import { type SortOrder } from '@/shared/types'
import { Select, type SelectOption } from '@/shared/ui/Select'
import cls from './ArticleSortSelector.module.sass'

interface ArticleSortSelectorProps {
  classname?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { sort, order, onChangeSort, onChangeOrder } = props

  const orderOptions: SelectOption<SortOrder>[] = [
    {
      value: 'asc',
      content: 'возрастанию'
    },
    {
      value: 'desc',
      content: 'убыванию'
    }
  ]

  const orderFieldsOptions: SelectOption<ArticleSortField>[] = [
    {
      value: ArticleSortField.CREATED,
      content: 'дате'
    },
    {
      value: ArticleSortField.TITLE,
      content: 'заголовку'
    },
    {
      value: ArticleSortField.VIEWS,
      content: 'просмотрам'
    }
  ]

  return (
    <div className={classNames(cls.ArticleSortSelector)}>
      <Select value={order} options={orderOptions} onChange={onChangeOrder} label={'Сортировать по'} />
      <Select
        classname={cls.order}
        value={sort}
        options={orderFieldsOptions}
        onChange={onChangeSort}
        label={'Сортировать по'}
      />
    </div>
  )
}
