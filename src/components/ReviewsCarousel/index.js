import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {currentIndex: 0}

  onClickLeftArrow = () => {
    const {currentIndex} = this.state

    if (currentIndex > 0) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex - 1}))
    }
  }

  onClickRightArrow = () => {
    const {currentIndex} = this.state
    const reviewsListObj = this.props

    const {reviewsList} = reviewsListObj

    if (currentIndex < reviewsList.length) {
      this.setState(prevState => ({currentIndex: prevState.currentIndex + 1}))
    }
    if (currentIndex === reviewsList.length - 1) {
      this.setState({currentIndex: reviewsList.length - 1})
    }
  }

  render() {
    const {currentIndex} = this.state
    const reviewsListObj = this.props

    const {reviewsList} = reviewsListObj

    const {imgUrl, username, companyName, description} = reviewsList[
      currentIndex
    ]

    return (
      <div className="app-container">
        <div className="reviews-bg-container">
          <h1 className="review-heading">Reviews</h1>
          <div className="review-container">
            <img src={imgUrl} alt={username} className="user-image" />
            <div className="carousel-button-container">
              <button
                type="button"
                className="button"
                onClick={this.onClickLeftArrow}
                data-testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  className="arrow"
                  alt="left arrow"
                />
              </button>
              <p className="user-name">{username}</p>
              <button
                type="button"
                className="button"
                onClick={this.onClickRightArrow}
                data-testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                  className="arrow"
                  alt="right arrow"
                />
              </button>
            </div>
            <p className="text">{companyName}</p>
            <p className="text">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
