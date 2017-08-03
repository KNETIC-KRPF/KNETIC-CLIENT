import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Synthesizer from './components/Synthesizer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Synthesizer />, document.getElementById('root'));
registerServiceWorker();
