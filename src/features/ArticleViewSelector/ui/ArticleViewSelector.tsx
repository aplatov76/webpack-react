import { ArticleView } from '@/entities/Article'
import ListIcon from '@/shared/assets/icons/list-24-24.svg'
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg'
import { Button, ThemeButton } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'

interface ArticleViewSelectorProps {
  classname?: string
  view: ArticleView
  onViewClicked: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: ListIcon
  },
  {
    view: ArticleView.BIG,
    icon: TiledIcon
  }
]

export const ArticleViewSelector = ({ classname = '', view, onViewClicked }: ArticleViewSelectorProps) => {
  const click = (newView: ArticleView) => () => {
    onViewClicked?.(newView)
  }

  return (
    <div>
      {viewTypes.map((item) => (
        <Button key={item.view} theme={ThemeButton.OUTLINE} onClick={click(item.view)}>
          <Icon Svg={item.icon} />
        </Button>
      ))}
    </div>
  )
}
