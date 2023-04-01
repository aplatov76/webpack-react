/* eslint-disable @typescript-eslint/quotes */
import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'
import { type SideBarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const SideBarItemsList: SideBarItemType[] = [
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
      path: RoutePath.articles,
      icon: ArticleIcon,
      text: 'Статьи'
    }
  ]
  console.log(userData)
  if (userData) {
    SideBarItemsList.push({
      path: RoutePath.profile + userData.id,
      icon: ProfileIcon,
      text: 'Профиль'
    })
  }

  return SideBarItemsList
})
