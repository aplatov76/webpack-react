/* eslint-disable @typescript-eslint/quotes */
import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
  routeConfig
} from '@/app/providers/router/config/routeConfig'

import AboutIcon from '@/shared/assets/icons/about-20-20.svg'
import MainIcon from '@/shared/assets/icons/main-20-20.svg'
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg'
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg'
import { type SideBarItemType } from '../types/sidebar'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const SideBarItemsList: SideBarItemType[] = [
    {
      path: getRouteMain(),
      icon: MainIcon,
      text: 'Главная'
    },
    {
      path: getRouteAbout(),
      icon: AboutIcon,
      text: 'О сайте'
    },
    {
      path: getRouteArticles(),
      icon: ArticleIcon,
      text: 'Статьи'
    }
  ]
  console.log(userData)
  if (userData) {
    SideBarItemsList.push({
      path: getRouteProfile(userData.id),
      icon: ProfileIcon,
      text: 'Профиль'
    })
  }

  return SideBarItemsList
})
