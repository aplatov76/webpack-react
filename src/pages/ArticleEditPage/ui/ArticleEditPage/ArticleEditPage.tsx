/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { memo } from 'react'
import { useParams } from 'react-router-dom'

interface ArticleEditPageProps {
  classname?: string
}
const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { classname } = props
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)
  return <div>{isEdit ? `Редактирование: ${id}` : 'Cоздание'}</div>
})

export default ArticleEditPage
