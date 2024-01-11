import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Header } from "./layouts/Header"
import { MobileMenu } from "./layouts/Mobile.Menu"
import { useState } from "react"
import { Footer } from "./layouts/Footer"

type TMenu = {
  name: string;
  to: string;
  submenu?: TMenu[];
}

function App() {

  const menu = [
    {
      name: 'about',
      to: '/about'
    },
    {
      name: 'approach',
      to: '/approach',
      submenu: [
        {
          name: 'our approach',
          to: '/approach/our-approach'
        },
        {
          name: 'health',
          to: '/our-approach/health'
        },
        {
          name: 'SET (software & enterprise tech)',
          to: '/set'
        }
      ]
    },
    {
      name: 'platform',
      to: '/platform',
      submenu: [
        { name: 'capital overview', to: '/capital-overview' }
      ]
    },
    {
      name: 'contact',
      to: '/contact'
    }
  ]

  const [step, setStep] = useState(1)

  const [submenu, setSubmenu] = useState<TMenu[] | undefined>(undefined)

  const [isMobileMenuOut, setIsMobileMenuOut] = useState(false)

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOut(true)

  }

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOut(false)
    setStep(1)
  }

  const handleChooseStep = (e?: TMenu[] | undefined) => {
    setStep(2)
    setSubmenu(e)
  }



  return (
    <>
      <Router>
        <Header menu={menu} handleOpenMobileMenu={handleOpenMobileMenu} isMobileMenuOut={isMobileMenuOut} handleCloseMobileMenu={handleCloseMobileMenu} />
        <MobileMenu submenu={submenu} menu={menu} isMobileMenuOut={isMobileMenuOut} step={step} handleChooseStep={handleChooseStep} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer menu={menu} />
      </Router>
    </>
  )
}

export default App
