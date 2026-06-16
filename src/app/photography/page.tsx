import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const photos = [
  ["/gallery-01.svg", "Quiet morning"],
  ["/gallery-02.svg", "Campus light"],
  ["/gallery-03.svg", "Research walk"]
];

export default function PhotographyPage() {
  return (
    <>
      <Header active="Photography" />
      <main className="single-page">
        <h1>Photography</h1>
        <p className="lead">Optional gallery page. Replace the placeholders with your own images.</p>
        <div className="gallery">
          {photos.map(([src, caption]) => (
            <div className="gallery-card" key={src}>
              <Image src={src} alt={caption} width={640} height={440} />
              <p>{caption}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
