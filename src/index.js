import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

ReactDOM.render(
    <ChakraProvider>
        <GlobalStyles />
        <Typography />
        <App />
    </ChakraProvider>,
    document.getElementById('root')
    );

reportWebVitals(console.log);