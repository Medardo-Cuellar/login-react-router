import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <p>Home</p>
  },
  {
    path: '/login',
    element: <p>Login</p>
  }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App />
)
