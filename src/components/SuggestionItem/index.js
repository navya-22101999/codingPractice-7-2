// Write your code here
const SuggestionItem = props => {
  const {details, deleteItem} = props
  const {suggestion} = details
  const onDelete = () => {
    deleteItem(suggestion)
  }
  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        value={suggestion}
        onClick={onDelete}
      />
    </li>
  )
}
export default SuggestionItem
