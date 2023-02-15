import ReactDOM from 'react-dom';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <UserSearch></UserSearch>
    </div>
  );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));
