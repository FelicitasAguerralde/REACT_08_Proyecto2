import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/Contact";
import { Curriculum } from "../components/Curriculum";
import { Footer } from "../components/Footer";
import { Index } from "../components/Index";
import Nav from "../components/Nav";
import { Proyects } from "../components/Proyects";
import { Services } from "../components/Services";

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
