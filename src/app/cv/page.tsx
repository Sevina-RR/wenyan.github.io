import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function CVPage() {
  return (
    <>
      <Header active="CV" />
      <main className="single-page">
        <h1>Curriculum Vitae</h1>
        <p className="lead">You can keep a short web CV here and also link to a PDF version.</p>
        <section className="content-card">
          <h2>Education</h2>
          <p><strong>University or Institution</strong>, Degree Program, 2022-2026</p>
          <p><strong>Previous University</strong>, Previous Degree, 2018-2022</p>
        </section>
        <section className="content-card">
          <h2>Experience</h2>
          <p><strong>Research Assistant</strong>, Lab or Group Name, 2024-present</p>
          <p><strong>Teaching Assistant</strong>, Course Name, 2023</p>
        </section>
        <section className="content-card">
          <h2>Awards</h2>
          <p>Scholarship or award name, 2026</p>
          <p>Travel grant or fellowship, 2025</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
