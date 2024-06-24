import { useState ,useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import{login,logout} from './store/authSlice'
import {Header } from './components'
import Footer from './components/Footer/Footer'
function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()
useEffect(() => {
authService.getCurrentUser()
.then((userData)=>{
  if(userData){
    dispatch(login({userData}))
  }
  else{
    dispatch(logout())
  }
})
.finally(()=>{
 setLoading(false)
})

}, [])
  return !loading ?
  <div>
<Header/>
<Footer/>
  </div> :null
}

export default App
