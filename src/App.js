import React from 'react';
import './App.css';
import { useState } from 'react';
import courses from './fakeData/courses';
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';

function App() {
  const [course, setCourse] = useState(courses);
  const [cart, setCart] = useState([]);
  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1 className="my-5" >Total Courses : <span className="text-info">{course.length}</span></h1>
      <Cart cart={cart}></Cart>
      <ul>{
        course.map(course => <Course key={course.code} course={course} handleAddCourse={handleAddCourse}></Course>)
      }
      </ul>
    </div>
  );
}

export default App;
