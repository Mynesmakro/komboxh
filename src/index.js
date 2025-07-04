import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom";
import About from './components/About';
import Rwr from './components/Rwr';
import About6 from './components/About6';
import About9 from './components/About9';
import About99 from './components/About99';
import About9991 from './components/About9991';
import About9992 from './components/About9992';
import About595 from './components/about595';
import About5955 from './components/about5955';
import About10 from './components/About10';
import About65 from './components/About65';
import About66 from './components/About66';
import reportWebVitals from './reportWebVitals';

const root1 = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root1'));
const root44 = ReactDOM.createRoot(document.getElementById('root44'));

root1.render(
  <React.StrictMode>
    <Router>
      <Routes> 
        <Route path="/welcome" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about6" element={<About6 />} />
        <Route path="/Xp6Vr8Lo2Kn3Yt9WsCf7Ju0NUx0Pm4Rs8Vy7Gtz6Tr3Hv9Ep2Gx4Lq7Pa5Wm1Jy8Rt0Kb3No6Xs" element={<About9 />} />
        <Route path="/Zq7Nx0Lp3Hv9Tr4Fd5Mu8Cy1Jo6Wn2Kx5Yt3Pa9Gs0Bj7LMf7Ld2q4Vr1Wm6Xe3Ub8Kt2Ro5Ny" element={<About99 />} />
        <Route path="/Ur5Xp3Lq9Yv2Wn6Ko4Md7Ct1Fb0Je8Ty3Gs5Nx4T3Hu9z0Xq6Kr1Po7Wm9Lb2Hv4Yt3Aj8Cf5Rs" element={<About9991 />} />
        <Route path="/Kt9Po6Wm3Lf1Xq7Yv2Ub4Jo0Md8Ns5Tr3Gn5Qa9CCw1Bn3Kv9Rp2Lk0Wb6Xt4Je3Mv1Ho8FsNy" element={<About9992 />} />
        <Route path="/Ty3Xp9Lq0Yv5Jo7Wn6Md1Cr8Ub4Ko2Gs6Kt1Ro8Wm3Lb73Zq9Yb5Uw2Xq0Hv2Je9Ma4Fy5Ns" element={<About595 />} />
        <Route path="/9Kr2Xp6Lq7Mt3Bc8Zv1Wo4Nh5Ty3Jd65JLo3Vn5Ga1X2Ub4Jo0Md8Ns5Tr3Gn5p6JrFx7Km4Th" element={<About5955 />} />
        <Route path="/about10" element={<About10 />} />
        <Route path="/uploader" element={<About65 />} />
        <Route path="/display/:number" element={<About66 />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

if (root2) {
  root2.render(
    <React.StrictMode>
      <Router>
        <Routes> 
          <Route path="/pVt2Gk8Aq4Jm1Ew7Sx3Lc5Ov9Iu6Qy0Nz9Rp7Xh4Yg1Tb0Hw8Jr5Kx2Gz0Pn9" element={<Rwr />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

if (root44) {
  root44.render(
    <React.StrictMode>
      <Router>
        <Routes> 
        <Route path="/about9" element={<about9 />} />
          <Route path="/about595" element={<about595 />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
reportWebVitals();