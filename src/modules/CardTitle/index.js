import React, { useState, useEffect } from 'react';
import './CardTitle.css';
import PropTypes from 'prop-types';

export default function CardTitle({title, img}) {

  return (
    <div class="container-title">
        <img class="container-title-img" src={img}/>
        <span>{title}</span>
    </div>
  );
}
CardTitle.prototype = {
  title: PropTypes.string,
  img: PropTypes.string,
}