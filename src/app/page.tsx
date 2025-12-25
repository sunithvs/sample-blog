import Link from "next/link";
import styles from "./page.module.css";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

async function getBlogs(): Promise<Blog[]> {
  // Simulate a server-side delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: 1,
      title: "Privacy Policy",
      excerpt: "Read our privacy policy.",
      date: "2023-10-01",
      slug: "privacy-policy",
    },
    {
      id: 2,
      title: "Sample Page",
      excerpt: "Check out this sample page.",
      date: "2023-10-05",
      slug: "sample-page",
    },
  ];
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>My SSR Blog</h1>
        <p>A simple server-side rendered blog list.</p>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`} className={styles.card}>
              <article>
                <h2>{blog.title}</h2>
                <p className={styles.date}>{blog.date}</p>
                <p>{blog.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My SSR Blog</p>
      </footer>
    </div>
  );
}
