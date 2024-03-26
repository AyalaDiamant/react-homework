import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { userContext, UserContext } from './context/user.context';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { SignUp } from './components/signup.component';
import { User } from './interfaces/user.interface';
import SignIn from './components/signIn.component.tsx';
import { ProductComponent } from './components/product.component.tsx';

const userData: userContext = {
  user: undefined,
  setUser(user: User) {
    this.user = user;
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  }, {
    path: '/sign-up',
    Component: SignUp,
  }, {
    path: '/sign-in',
    Component: SignIn,
  }, {
    path: '/product',
    Component: ProductComponent,
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContext.Provider value={userData}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>,
)
