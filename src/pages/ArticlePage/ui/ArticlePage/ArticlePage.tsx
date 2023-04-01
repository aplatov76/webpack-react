/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable max-len */
import { ArticleList, type ArticleView, ArticleViewSelector } from 'entities/Article'
import { type Article } from 'entities/Article/model/types/article'
import { getArticlesList, reducer, actions } from '../../models/slices/articlePage.slice'
import { memo, useCallback, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import cls from './ArticlePage.module.sass'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticlesList } from 'pages/ArticlePage/models/services/fetchArticlePage/fetchArticleList'
import { useSelector } from 'react-redux'
import {
  getArticlePageError,
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageLimit,
  getArticlePagePage,
  getArticlePageView
} from 'pages/ArticlePage/models/selectors/articlePage.selector'
import { Page } from 'shared/ui/Page/Page'
import { fetchNextArticlePage } from 'pages/ArticlePage/models/services/fetchNextArticlePage/fetchNextArticlePage'

interface ArticlePageProps {
  classname?: string
}

const reducers: ReducersList = {
  articlesPage: reducer
}

const article = {
  id: '1',
  title: 'Javascript news 777',
  subtitle: 'Что нового в JS за 2022',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: ['IT', 'POLITICS', 'RUSSIA', 'PUILO', 'ECONOMIC'],
  user: {
    id: '1',
    username: 'aplatov',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
  },
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '4',
      type: 'CODE',
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта'
    },
    {
      id: '3',
      type: 'CODE',
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);"
    },
    {
      id: '7',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:'
      ]
    },
    {
      id: '8',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта'
    },
    {
      id: '9',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.'
      ]
    }
  ]
} as unknown as Article

const ArticlePage = (props: ArticlePageProps) => {
  const { classname } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticlesList.selectAll)
  const isLoading = useSelector(getArticlePageIsLoading)
  const error = useSelector(getArticlePageError)
  const view = useSelector(getArticlePageView)

  useEffect(() => {
    dispatch(actions.initState())
    // dispatch(fetchArticlesList({}))
  }, [])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  const changeView = (view: ArticleView) => {
    dispatch(actions.setView(view))
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [classname])}>
        <Page onScrollEnd={onLoadNextPart}>
          <ArticleViewSelector view={view} onViewClicked={changeView} />
          <ArticleList isLoading={isLoading} view={view} articles={articles} />
        </Page>
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlePage)
