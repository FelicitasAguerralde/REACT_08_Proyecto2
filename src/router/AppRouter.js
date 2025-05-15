import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Index } from "../components/Index";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import { Curriculum } from "../components/Curriculum";
import { Contact } from "../components/Contact";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AboutMe } from "../components/AboutMe";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <section className="content">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
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
