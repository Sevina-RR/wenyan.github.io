import Link from "next/link";

export default function NotFound() {
  return (
    <main className="single-page">
      <h1>Page Not Found</h1>
      <p className="lead">这个页面不存在，可能是链接写错了。</p>
      <p>
        <Link className="pill-link" href="/">
          Back to homepage
        </Link>
      </p>
    </main>
  );
}
