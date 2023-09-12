import './App.css';
import SearchUsers from './UsersList';
import SearchTodos from './ToDo'
import PureCompo from './PureCompo';
function App() {
  return (
    <>
      <div>
        <h1> Higher Order Component</h1>
        <h3 style={{ backgroundColor: "red", height: 30 }}>higher order component is an advanced technique in react for resuing component logic. Hoc take a component and return a new component </h3>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ backgroundColor: "yellowgreen", width: 200 }}><SearchUsers /></div>
          <div style={{ backgroundColor: "ThreeDLightShadow", color: "whitesmoke", width: 200 }}><SearchTodos /></div>
        </div>
      </div>
      <div>
        <h1>Pure Component</h1>
        <h3 style={{ backgroundColor: "red", height: 60, padding: 10 }}>It is the features of react
          which stop re-rendering the render method . ReactJS has provided us a Pure Component.
          If we extend a class with Pure Component, there is no need for
          shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class
          compares current state and props with new props and states to decide whether
          the React component should re-render itself or  Not.
        </h3>
        <PureCompo />
      </div>
    </>
  );
}

export default App;
