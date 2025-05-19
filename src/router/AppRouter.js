import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AboutMe } from "../pages/AboutMe";
import { Contact } from "../pages/Contact";
import { Curriculum } from "../pages/Curriculum";
import { Footer } from "../components/layout/Footer";
import { Index } from "../pages/Index";
import Nav from "../components/layout/Nav";
import { Proyects } from "../pages/Proyects";
import { Services } from "../pages/Services";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <section className="content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proyects" element={<Proyects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
};
