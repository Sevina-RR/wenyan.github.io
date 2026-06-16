import Image from "next/image";
import { profile } from "@/data/profile";

export function ProfileSidebar() {
  return (
    <aside className="profile">
      <div className="portrait">
        <Image src="/profile-placeholder.svg" alt="Portrait placeholder" width={900} height={980} priority />
      </div>
      <div className="profile-text">
        <h1>{profile.name}</h1>
        <p className="role">{profile.title}</p>
        <p className="affiliation">{profile.institution}</p>
        <div className="socials" aria-label="Profile links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.scholar}>Scholar</a>
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
        </div>
      </div>
      <section className="side-card">
        <h2>Research Interests</h2>
        <ul>
          {profile.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>
      <section className="side-card">
        <h2>Contact</h2>
        <p>{profile.email}</p>
        <p>{profile.location}</p>
      </section>
    </aside>
  );
}
