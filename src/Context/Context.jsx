import React from 'react';

const ContextCalculator = React.createContext();

// Change context's name into virtual DOM
ContextCalculator.displayName = ContextCalculator;

export default ContextCalculator;