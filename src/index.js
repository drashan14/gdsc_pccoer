import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';


ReactDOM.render(
<>
<GlobalStyles />
<Typography />
<App />
</>,
 document.getElementById('root')
 );

reportWebVitals(console.log);