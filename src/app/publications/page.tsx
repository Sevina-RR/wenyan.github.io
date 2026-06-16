import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PublicationCard } from "@/components/PublicationCard";
import { publications } from "@/data/profile";

export default function PublicationsPage() {
  return (
    <>
      <Header active="Publications" />
      <main className="single-page">
        <h1>Publications</h1>
        <p className="lead">Replace these examples with your papers, preprints, posters, and selected writing.</p>
        <div className="publication-list">
          {publications.map((publication) => (
            <PublicationCard key={publication.title} publication={publication} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
