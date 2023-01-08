/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import "../../styles/core/_homepage.scss"
import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className='homepage'>
            <div className='home-carousel'>
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={true}
                slides={banners}
                responsive={responsiveOneItemCarousel}>
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} />
                ))}
              </CarouselSlider>
            </div>
         
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
