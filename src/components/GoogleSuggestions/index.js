// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    search: '',
  }

  searchInput = event => {
    this.setState({search: event.target.value})
  }

  onDelete = suggestion => {
    this.setState({search: suggestion})
  }

  render() {
    const {search} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(search.toLowerCase()),
    )
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image"
        />
        <div>
          <label htmlFor="imageId">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
          </label>
          <input
            type="search"
            placeholder="Search Google"
            id="imageId"
            onChange={this.searchInput}
            value={search}
          />
          <ul>
            {searchResults.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                details={eachItem}
                deleteItem={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
