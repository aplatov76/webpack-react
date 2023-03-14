import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'

export interface SideBarItemType {
  path: string
  text: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SideBarItemsList: SideBarItemType[] = [
  {
    path: RoutePath.main,
    icon: MainIcon,
    text: 'Главная'
  },
  {
    path: RoutePath.about,
    icon: AboutIcon,
    text: 'О сайте'
  },
  {
    path: RoutePath.profile,
    icon: ProfileIcon,
    text: 'Профиль'
  },
  {
    path: RoutePath.articles,
    icon: ArticleIcon,
    text: 'Статьи'
  }
]
