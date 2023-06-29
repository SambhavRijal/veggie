"use client";

import { NavHeader } from './Header'
import { Hero } from './home/hero'
import { CardsCarousel } from './home/category';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { MainFooter } from './Footer';
import { Browse } from './home/browse';
import { EndBanner } from './home/banner';

export default function Home() {
  return (
    <Provider store={store}>
      <main className='main-body h-screen'>
        <NavHeader/>
        <Hero/>
        {/* <Featured/> */}
        <Browse/>
        <CardsCarousel />
        <EndBanner/>
        <MainFooter/>
      </main>
    </Provider>
  )
}
