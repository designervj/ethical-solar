
import React from 'react'
import HomePage from '@/pages/HomePage'
import Header from '@/components/sections/Header'
import Footer from "@/components/sections/Footer";
import { Route, Routes } from 'react-router-dom';
import WebPage from './components/sections/What-be-do/WebPage';
import WorkPage from './components/sections/Who-We-Create/WorkPage';
import IdeasInsights from './components/sections/IdeaInsightPage/IdeasInsights';
import LetsTalkPage from './pages/LetsTalkPage';



export default function App(){
  const [view, setView] = React.useState<'home'|'product'>('home')
  const leftNav = [
    {
      label: "Noževi",
      children: [
        { label: "Petty", href: "/petty" },
        { label: "Gyuto", href: "/gyuto" },
        { label: "Santoku", href: "/santoku" },
        { label: "Nakiri", href: "/nakiri" },
      ],
    },
    { label: "O Noževima", href: "/o-nozevima" },
    { label: "O Karlo Banu", href: "/o-karlo-banu" },
    { label: "Što drugi kažu", href: "/recenzije" },
  ];
  return (
    <div className="text-brand-text">
      <Header
      />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/what-we-do' element={<WebPage/>}/>
        <Route path='/who-we-create-for' element={<WorkPage/>}/>
        <Route path='/ideas-insights' element={<IdeasInsights/>}/>
        <Route path='/lets-talk' element={<LetsTalkPage/>}/>




      
       
      </Routes>
   
      <Footer />
    </div>
  )
}
