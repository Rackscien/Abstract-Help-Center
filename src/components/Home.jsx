import React from 'react'
import Header from'./header'
import Footer from'./footer'
import Searchbar from './searchbar'
import Main from'./main'
export default function Home() {
  return (
    <>
      <Header/>
      <Searchbar/>
      <Main/>
      <Footer/>
    </>
  )
}
