import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const app = <App />;
const container = document.getElementById('root');

reactDom.render(app, container);
