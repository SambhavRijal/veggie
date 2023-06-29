"use client";

import { Provider } from 'react-redux';
import { NavHeader } from '../Header';
import CartItems from './cartitems';
import { store } from '@/redux/store';
import { Text } from '@mantine/core';


export default function Home() {
  return (
    <Provider store={store}>
    <main className='main-body h-screen w-screen  flex justify-center'>
      <NavHeader/>
      <CartItems />

    </main>
    </Provider>
  )
}
