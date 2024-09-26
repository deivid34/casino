import { Routes, Route } from 'react-router-dom'
import React from 'react'

import {
  Home,
 Pix,
 Casino
} from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/pix" element={<Pix />} />
     <Route path="/casino" element={<Casino />} />

    </Routes>
  )
}
