import { ArticleView } from 'entities/Article'
import cls from './ArticleViewSelector.sass'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { classNames } from 'shared/lib/classNames'
import { Button, Icon } from 'shared/ui'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

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
