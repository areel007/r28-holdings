import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Header } from "./layouts/Header"
import { MobileMenu } from "./layouts/Mobile.Menu"
import { useState } from "react"
import { Footer } from "./layouts/Footer"
import { WhoWeAre } from "./pages/about.us/who.we.are"
import { OurCulture } from "./pages/about.us/our.culture"
import { StrategicAlliances } from "./pages/strategic.alliances"
import { OurInvestments } from "./pages/our.investments"
import { Contact } from "./pages/contact"
import { About } from "./pages/about.us"
import { Approach } from "./pages/approach"
import { Leadership } from "./pages/about.us/leadership"
import { Construction } from "./pages/our.investments/construction"
import { RealEstate } from "./pages/our.investments/real.estate"
import { Aviation } from "./pages/our.investments/aviation"
import { Telecommunications } from "./pages/our.investments/telecommunication"
import { Mining } from "./pages/our.investments/mining"
import { Arbico } from "./pages/our.investments/construction/arbico"
import { NotFound } from "./pages/404"
import { Nivafer } from "./pages/our.investments/construction/nivafer"
import { FIDC } from "./pages/our.investments/real.estate/fidc"
import { AAC } from "./pages/our.investments/aviation/aviation"
import { Biswal } from "./pages/our.investments/telecomms/biswal"
import { AFL } from "./pages/our.investments/telecomms/afl"
import { Ledco } from "./pages/our.investments/aviation/ledco"
import { Anker } from "./pages/our.investments/retail.services.tsx/anker"
import { PrestigeChenJun } from "./pages/our.investments/mining/prestige.chen.jun"
// import { OSC } from "./pages/our.investments/manufacturing/osc"
import { EcoJoinery } from "./pages/our.investments/manufacturing/eco.joinery"
import { Utopian } from "./pages/our.investments/healthcare/utopian"
import { Veenocks } from "./pages/our.investments/manufacturing/veenocks"
// import { Posmoreti } from "./pages/our.investments/retail.services.tsx/posmoreti"
import { SirKessington } from "./pages/about.us/leadership/Sir.Kessington"
import { Adebisi } from "./pages/about.us/leadership/Adebisi"
import { Afolabi } from "./pages/about.us/leadership/Afolabi"
import { Eyo } from "./pages/about.us/leadership/Eyo"
import { News } from "./pages/news"
import { LagosArena } from "./pages/news/lagos.arena"
import { LowCup } from "./pages/news/low.cup"
import { Login } from "./pages/admin/auth"
import axios from "axios"
import { Dashboard } from "./pages/admin/dashboard"
import { ProtectedRoute } from "./layouts/ProtectedRoute"
import { NewsAndEvents } from "./pages/admin/news"
import { SingleNews } from "./pages/news/_news"
import { CMSAboutUs } from "./pages/admin/about.us"
import { CMSApproach } from "./pages/admin/approach"
import { CMSStrategicAlliances } from "./pages/admin/strategic-alliances"
import { CMSHome } from "./pages/admin/home"
import { CMSSettings } from "./pages/admin/settings"

type TMenu = {
  name: string;
  to: string;
  submenu?: TMenu[];
}

function App() {

  const menu = [
    {
      name: 'about us',
      to: '/about-us',
      submenu: [
        {
          name: 'who we are',
          to: '/about-us/who-we-are'
        },
        {
          name: 'our culture & core values',
          to: '/about-us/our-culture-and-core-values'
        },
        {
          name: 'leadership',
          to: '/about-us/leadership'
        }
      ]
    },
    {
      name: 'approach',
      to: '/approach',
    },
    {
      name: 'our investments',
      to: '/our-investments',
      // submenu: [
      //   {
      //     name: 'construction',
      //     to: '/our-investments/construction'
      //   },
      //   {
      //     name: 'real estate',
      //     to: '/our-investments/real-estate'
      //   },
      //   {
      //     name: 'aviation',
      //     to: '/our-investments/aviation'
      //   },
      //   {
      //     name: 'telecommunications',
      //     to: '/our-investments/telecommunications'
      //   },
      //   {
      //     name: 'technology & energy solutions',
      //     to: '/our-investments/technology-and-energy-solutions'
      //   },
      //   {
      //     name: 'mining',
      //     to: '/our-investments/mining'
      //   }
      // ]
    },
    {
      name: 'strategic alliances',
      to: '/strategic-alliances',
    },
    {
      name: 'news & events',
      to: '/news-and-events',
    },
    {
      name: 'contacts',
      to: '/contacts'
    }
  ]

  const [step, setStep] = useState(1)

  const [submenu, setSubmenu] = useState<TMenu[] | undefined>(undefined)

  const [isMobileMenuOut, setIsMobileMenuOut] = useState(false)

  const [form, setForm] = useState({
    username: '',
    password: ''
  })
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!form.username || !form.password) {
      return setErrMsg('All fields must be filled.')
    }

    try {
      const response = await axios.post("https://r28-backend.onrender.com/api/auth/login", { username: form.username, password: form.password })
      window.sessionStorage.setItem("isLoggedIn", "true")
      window.sessionStorage.setItem("token", response.data.token)
      window.sessionStorage.setItem("role", response.data.role)
      window.location.href = "/admin/dashboard"

      console.log(response.data);



    } catch (error) {
      setErrMsg("try again with the correct credentials")

    }




    // if (form.username === '889379027' && form.password === 'Rosiedixon196') {
    //   setIsLoggedIn(true)
    //   window.sessionStorage.setItem('isLoggedIn', 'true')
    // }
    // else setErrMsg('Wrong sign in credentials')

  }

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

  const adminRoutes = ["/admin/login", "/admin/dashboard"];

  const isRouteAdmin = () => adminRoutes.some(route => location.pathname.startsWith(route));

  const renderHeader = () => {
    if (!isRouteAdmin()) {
      return <Header menu={menu} handleOpenMobileMenu={handleOpenMobileMenu} isMobileMenuOut={isMobileMenuOut} handleCloseMobileMenu={handleCloseMobileMenu} />;
    }
    return null;
  };

  const renderFooter = () => {
    if (!isRouteAdmin()) {
      return <Footer />
    }
  }

  return (
    <Router>
      {renderHeader()}
      <MobileMenu submenu={submenu} menu={menu} isMobileMenuOut={isMobileMenuOut} step={step} handleChooseStep={handleChooseStep} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/about-us/who-we-are" element={<WhoWeAre />} />
        <Route path="/about-us/our-culture-and-core-values" element={<OurCulture />} />
        <Route path="/about-us/leadership" element={<Leadership />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/strategic-alliances" element={<StrategicAlliances />} />
        <Route path="/our-investments" element={<OurInvestments />} />
        <Route path="/our-investments/construction" element={<Construction />} />
        <Route path="/our-investments/real-estate" element={<RealEstate />} />
        <Route path="/our-investments/aviation" element={<Aviation />} />
        <Route path="/our-investments/telecommunications" element={<Telecommunications />} />
        <Route path="/our-investments/arbico" element={<Arbico />} />
        <Route path="/our-investments/nivafer" element={<Nivafer />} />
        <Route path="/our-investments/fidc" element={<FIDC />} />
        <Route path="/our-investments/aac" element={<AAC />} />
        <Route path="/our-investments/biswal" element={<Biswal />} />
        <Route path="/our-investments/afl" element={<AFL />} />
        <Route path="/our-investments/ledco" element={<Ledco />} />
        <Route path="/our-investments/anker" element={<Anker />} />
        <Route path="/our-investments/prestige-chen-jun" element={<PrestigeChenJun />} />

        {/* <Route path="/our-investments/osc" element={<OSC />} /> */}

        <Route path="/our-investments/eco-joinery" element={<EcoJoinery />} />
        <Route path="/our-investments/utopian" element={<Utopian />} />
        <Route path="/our-investments/veenocks" element={<Veenocks />} />

        {/* <Route path="/our-investments/posmoreti" element={<Posmoreti />} /> */}

        <Route path="/our-investments/mining" element={<Mining />} />
        <Route path="/about-us/leadership/sir-kesington" element={<SirKessington />} />
        <Route path="/about-us/leadership/adebisi" element={<Adebisi />} />
        <Route path="/about-us/leadership/afolabi" element={<Afolabi />} />
        <Route path="/about-us/leadership/eyo" element={<Eyo />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/news-and-events" element={<News />} />
        <Route path="/news-and-events/:id" element={<SingleNews />} />
        <Route path="/news-and-events/lagos-arena" element={<LagosArena />} />
        <Route path="/news-and-events/low-cup" element={<LowCup />} />
        <Route path="/admin/login" element={<Login errMsg={errMsg} form={form} handleChange={handleChange} handleLogin={handleLogin} isSignedIn={window.sessionStorage.getItem('isLoggedIn')} />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute isAuthenticated={window.sessionStorage.getItem('isLoggedIn')} redirect="/admin/login" />}>
          <Route path="/admin/dashboard" element={<Dashboard />}>
            <Route index element={<CMSHome />} />
          </Route>

          <Route path="/admin/dashboard/news" element={<Dashboard />}>
            <Route index element={<NewsAndEvents />} />
          </Route>

          <Route path="/admin/dashboard/about" element={<Dashboard />}>
            <Route index element={<CMSAboutUs />} />
          </Route>

          <Route path="/admin/dashboard/approach" element={<Dashboard />}>
            <Route index element={<CMSApproach />} />
          </Route>

          <Route path="/admin/dashboard/strategic-alliances" element={<Dashboard />}>
            <Route index element={<CMSStrategicAlliances />} />
          </Route>

          <Route path="/admin/dashboard/settings" element={<Dashboard />}>
            <Route index element={<CMSSettings />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {renderFooter()}
    </Router>
  )
}

export default App

// super_admin
// #TechAdmin$!
