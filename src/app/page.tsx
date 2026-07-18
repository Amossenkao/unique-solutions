"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PartnerBanner from "@/components/PartnerBanner";
import ServicesTabs from "@/components/ServicesTabs";
import DigitalLiteracy from "@/components/DigitalLiteracy";
import EquipmentSales from "@/components/EquipmentSales";
import EnterpriseICT from "@/components/EnterpriseICT";
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
        <About />
        <PartnerBanner />
        <ServicesTabs />
        <DigitalLiteracy />
        <EquipmentSales />
        <EnterpriseICT />
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
