import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from "./component/layout/layout"
import AddTask from './component/addTask/AddTask';
import Profile from './component/profile/profile';
import Register from './component/register/register';
import Login from "./component/login/login"



const router = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      {
        path: "", element: <Profile />
      },
      {
        path: "login", element: <Login />
      },
      {
        path: "register", element: <Register />
      },
      {
        path: "addTask", element: <AddTask />
      },

    ]
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  );
}

export default App;
