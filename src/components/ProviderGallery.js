import React from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from './common/LoadingScreen';

class Gallery extends React.Component {

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


  render() {
    const { items } = this.props;    
    if(!items || items.length === 0) {
      return (
        <LoadingScreen />
      )
    }
    return (
      <div data-testid="gallery" className="box-shadow gallery">
        <div className="gallery__slider">
          <div className="gallery__slider-item-wrapper">
            <div className="gallery__slider-item prev"
              style={{backgroundImage:`url("https://via.placeholder.com/150x100")`}}> 
            </div>            
            <div className="gallery__slider-item active">
              <img src={"https://via.placeholder.com/150x100"} className="gallery__slider-item active" alt="" />
              <div className="gallery__slider-item__info">
                <div className="gallery__slider-item__info-name">A Provider Name</div>
                <div className="gallery__slider-item__info-description">
                  A Description
                  <p className="read-more">Click to View</p>
                </div>
              </div>
            </div>          
            <div className="gallery__slider-item next"
              style={{backgroundImage:`url("https://via.placeholder.com/150x100")`}}>              
            </div>            
          </div>    
          <div className="gallery__slider-controls">
            <button className="gallery__slider-controls__button left">
              <i className="fa fa-chevron-left"></i>
            </button>
            <button className="gallery__slider-controls__button right">
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>      
        </div>     
        <div className="gallery__thumbnails">
          <div className="gallery__thumbnails__item"
            style={{backgroundImage:`url("https://via.placeholder.com/150x100")`}}>            
          </div>
          <div className="gallery__thumbnails__item active"
            style={{backgroundImage:`url("https://via.placeholder.com/150x100")`}}>            
          </div>
          <div className="gallery__thumbnails__item"
            style={{backgroundImage:`url("https://via.placeholder.com/150x100")`}}>            
          </div>                                       
        </div>
      </div>
    )
  }
}

Gallery.propTypes = {
  startFrom: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string,
    description: PropTypes.string
  })).isRequired,
  onClick: PropTypes.instanceOf(Function)
}

export default Gallery
