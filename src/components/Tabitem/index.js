import './index.css'

const TabItem = props => {
  const {tabDetails, active, onClickTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    onClickTab(tabId)
  }
  const activeClassnae = active ? 'active-tab' : null
  return (
    <li className="tab-item">
      <button
        className={`tab-item-button ${activeClassnae}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
