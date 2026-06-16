import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { PublicationCard } from "@/components/PublicationCard";
import { profile, publications } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Header active="About" />
      <div className="page">
        <ProfileSidebar />
        <main>
          <section className="content-card">
            <h2>About</h2>
            <p>
              Hello, I am Your Name. I am a researcher interested in how thoughtful computational
              tools can support scientific discovery, learning, and human flourishing.
            </p>
            <p>
              My work combines methods from machine learning, data science, and domain research. I
              enjoy building systems that make complex evidence easier to inspect, compare, and
              communicate.
            </p>
            <p>
              This homepage is designed as a warm academic profile: a place for selected
              publications, research projects, updates, and links to code or writing.
            </p>
          </section>

          <section>
            <div className="section-heading">
              <h2>Selected Publications</h2>
              <Link href="/publications">View All →</Link>
            </div>
            <div className="publication-list">
              {publications.slice(0, 2).map((publication) => (
                <PublicationCard key={publication.title} publication={publication} />
              ))}
            </div>
          </section>

          <section>
            <div className="section-heading">
              <h2>Recent News</h2>
            </div>
            <div className="timeline">
              {profile.news.map(([date, text]) => (
                <p key={date}>
                  <span>{date}</span>
                  {text}
                </p>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
