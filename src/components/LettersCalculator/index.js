import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchItem: ''}

  changeValue = event => {
    this.setState({
      searchItem: event.target.value,
    })
  }

  render() {
    const {searchItem} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="input">Enter the phrase</label>
          <input
            type="text"
            onChange={this.changeValue}
            placeholder="Enter the phrase"
          />

          <p className="text">No.of letters: {searchItem.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
