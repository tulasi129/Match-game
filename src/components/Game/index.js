import './index.css'
import TabItem from '../Tabitem'
import ThumbnailItem from '../ThumbnailItems'

const Game = props => {
  const {
    imagesList,
    tabsList,
    thumbnailImagesList,
    activeTabId,
    currentImageId,
    onClickTab,
    onClickThumbnail,
  } = props

  const getImage = () => imagesList.find(image => image.id === currentImageId)
  const renderTabs = () => (
    <ul className="tab-items-container">
      {tabsList.map(tab => (
        <TabItem
          tabDetails={tab}
          active={tab.tabId === activeTabId}
          onClickTab={onClickTab}
          key={tab.tabId}
        />
      ))}
    </ul>
  )
  const renderThumbnails = () => (
    <ul className="thumbnails-container">
      {thumbnailImagesList.map(eachThumbnail => (
        <ThumbnailItem
          thumbnail={eachThumbnail}
          key={eachThumbnail.id}
          onClickThumbnail={onClickThumbnail}
        />
      ))}
    </ul>
  )

  const {imageUrl} = getImage()
  return (
    <div className="game-container">
      <img className="match-image" src={imageUrl} alt="match" />
      {renderTabs()}
      {renderThumbnails()}
    </div>
  )
}

export default Game
