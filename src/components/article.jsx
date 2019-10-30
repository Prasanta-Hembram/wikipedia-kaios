import { h, Fragment } from 'preact'
import { Pager } from 'components/pager.jsx'
import { Softkey } from 'components/softkey'
import { useArticle } from 'hooks/useArticle'
import { useBackToSearch } from 'hooks/useBackToSearch'

export const Article = ({ lang, title }) => {
  const article = useArticle(lang, title)
  useBackToSearch()

  if (!article) {
    return 'Loading...'
  }

  const hasImage = !!article.imageUrl

  return (
    <Fragment>
      <Pager>
        <div class='page article'>
          { hasImage && <div class='lead-image' style={{ backgroundImage: `url(${article.imageUrl})` }} /> }
          <div class={'card' + (hasImage ? ' with-image' : '')}>
            <div class='title' dangerouslySetInnerHTML={{ __html: article.title }} />
            { article.description && (
              <Fragment>
                <div class='desc'>{article.description}</div>
                <div class='line' />
              </Fragment>
            ) }
            <div
              class='article-content'
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </Pager>
      <Softkey
        left='Settings'
      />
    </Fragment>
  )
}
