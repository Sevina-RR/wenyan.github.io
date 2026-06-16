export type Publication = {
  title: string;
  authors: string;
  venue: string;
  summary: string;
  links: string[];
};

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <article className="publication">
      <h2>{publication.title}</h2>
      <p className="meta">{publication.authors}</p>
      <p className="venue">{publication.venue}</p>
      <p>{publication.summary}</p>
      <p className="link-row">
        {publication.links.map((link) => (
          <a key={link} href="#">
            {link}
          </a>
        ))}
      </p>
    </article>
  );
}
