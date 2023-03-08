import './App.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from './components/Home'
import Contact from './components/Contact';
function App() {
  return (
   <>
<Router>
<Routes>

          <Route path="/" element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
  </Route >

</Routes>
</Router>
   </>
  )
}
export default App;
