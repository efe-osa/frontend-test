import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import LoadingScreen from './common/LoadingScreen';

class Gallery extends React.Component {
  constructor() {
    super()
    this.state = {
      activeIdx: 0,
    }
  }
  // TASK 3a:
  // Complete the Gallery component to include functionality  
  // On click on left or right arrows, the gallery should change its image
  // On click of the thumbnails, the image selected should be updated as well
  // On click of the "Read more" button in the selected Image, it should redirect to the Selected Provider View.
  //
  //
  // Task 3b:
  // Write tests for the Gallery component. Tests should be written in the Gallery.spec.js file in the __tests__ folder.
  //
  //
  // ============== CODE GOES BELOW THIS LINE :) ==============

  showSlides(n) {
    // const slides = document.getElementsByClassName("gallery__slider-item");
    // const thumbnails = document.getElementsByClassName("gallery__thumbnails");
  }

  moveLeft = () => {
    const { activeIdx } = this.state
    if (activeIdx > 0) {
      this.setState(({ activeInx: activeIdx - 1 }));
    }
  }
  moveRight = () => {
    const { activeIdx } = this.state
    const { items } = this.props
    if (activeIdx < items.length) {
      this.setState(({ activeInx: activeIdx + 1 }));
    }
  }

  isCurrentSlide = (idx) => {
    return this.activeIdx === idx ? 'active' : ''
  }


  render() {
    const { items, history } = this.props;
    const { activeIdx, } = this.state
    if (!items || items.length === 0) {
      return (
        <LoadingScreen />
      )
    }

    return (
      <div data-testid="gallery" className="box-shadow gallery">
        <div className="gallery__slider">

          <div className="gallery__slider-item-wrapper">
            <div className="gallery__slider-item prev"
              style={{ backgroundImage: `url(${activeIdx > 0 ? items[activeIdx - 1].url : "https://via.placeholder.com/150x100"})` }}>
            </div>
            <div className="gallery__slider-item active">
              <img src={items[activeIdx].url} className="gallery__slider-item active" alt="" />
              <div className="gallery__slider-item__info">
                <div className="gallery__slider-item__info-name">{activeIdx.name}</div>
                <div className="gallery__slider-item__info-description">
                  {activeIdx.description}
                  <p className="read-more" tabIndex={1} role="button" onClick={() => history.push(`/providers/${items[activeIdx]}.id`)}>
                    Click to View</p>
                </div>
              </div>
            </div>
            <div className="gallery__slider-item next"
              style={{ backgroundImage: `url(${items[activeIdx + 1].url})` }}>
            </div>
          </div>

          <div className="gallery__slider-controls">
            <button className="gallery__slider-controls__button left" onClick={this.moveLeft}>
              <i className="fa fa-chevron-left"></i>
            </button>
            <button className="gallery__slider-controls__button right" onClick={this.moveRight}>
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>

        </div>

        <div className="gallery__thumbnails">
          {items.map((item, idx) =>
            (
              <div className={`gallery__thumbnails__item ${this.isCurrentSlide(idx)}`}
                style={{ backgroundImage: `url(${item.url})` }}>
              </div>

            ))}
          {
            //   <div className="gallery__thumbnails__item "
            //   style={{backgroundImage:`url("https://via.placeholder.com/150x100")`}}>            
            // </div>
            // <div className="gallery__thumbnails__item"
            //   style={{backgroundImage:`url("https://via.placeholder.com/150x100")`}}>            
            // </div>
          }
        </div>
      </div>
    )
  }
}

Gallery.propTypes = {
  startFrom: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    description: PropTypes.string
  })).isRequired,
  onClick: PropTypes.instanceOf(Function)
}

export default withRouter(Gallery)
