import React, { useState, useEffect, Children } from 'react';
import './Card.css';

export default function Card({children}) {

  return (
    <div class="container-repo">
      {children}
    </div>
  );
}
