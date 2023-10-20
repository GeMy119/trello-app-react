import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout } from "./component/layout/layout"
import { Login } from "./component/login/login"
import { Register } from './component/register/register';
import { AddTask } from './component/addTask/AddTask';
import { Profile } from './component/profile/profile';
import { Home } from './component/home/home';


const router = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      {
        path: "login", element: <Login />
      },
      {
        path: "register", element: <Register />
      },
      {
        path: "addTask", element: <AddTask />
      },
      {
        path: "home", element: <Home />
      },
      {
        path: "profile", element: <Profile />
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
