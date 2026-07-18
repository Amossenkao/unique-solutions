"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerBanner from "@/components/PartnerBanner";
import ServicesTabs from "@/components/ServicesTabs";
import DigitalLiteracy from "@/components/DigitalLiteracy";
import AssignmentsTable from "@/components/AssignmentsTable";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PartnerModal from "@/components/PartnerModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setModalOpen(true)} />

      <main>
        <Hero onOpenModal={() => setModalOpen(true)} />
        <PartnerBanner />
        <ServicesTabs />
        <DigitalLiteracy />
        <AssignmentsTable />
        <ContactForm />
      </main>

      <Footer />

      <PartnerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
