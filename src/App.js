import './App.css';
import NewCourse from './course_component/AddingCourse.jsx';
import data from './courses.json';
// eslint-disable-next-line
import CourseList from './course_component/CourseList.jsx';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={CourseList}/>
          <Route path='/create'Component={NewCourse}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;