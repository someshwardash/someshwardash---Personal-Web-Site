/*
 * MainPage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Section from './Section';
import Slider from 'react-slick';
import Banner from './banner.jpg';

export default class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
    };
    return (
      <Slider {...settings}>
        <div><img style={{display: 'block', width: '100vw', height: '100vh'}}src={Banner} /></div>
      </Slider>
    );
  }
}
