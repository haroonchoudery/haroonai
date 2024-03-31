import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

// Define a type for job entries
type JobEntry = {
  title: string;
  role: string;
  description: JSX.Element | string;
};

// Array of job entries
const jobs: JobEntry[] = [
  {
    title: "Autoblocks AI",
    role: "CEO, Co-founder",
    description: "The AI product alignment platform.",
  },
  {
    title: "Not A Bot",
    role: "Founder, Human Writer",
    description: (
      <>
        A free AI newsletter, bringing you the latest news, developments, and
        tools to your inbox. Made for developers, investors, and enthusiasts.
      </>
    ),
  },
  {
    title: "AI For Anyone",
    role: "Founder, Executive Director",
    description:
      "One of the most impactful AI literacy nonprofits in the country. We taught over 70,000 people the fundamentals of AI.",
  },
  {
    title: "Highlight",
    role: "Head of Growth",
    description: "",
  },
  {
    title: "Hex",
    role: "Growth, Product Marketing",
    description: "",
  },
  {
    title: "Komodo Health",
    role: "Data Scientist",
    description: "",
  },
  {
    title: "Mark Cuban Companies",
    role: "ML Engineer",
    description: "",
  },
];

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build{" "}
          <Link href="/blog/developer-experience-examples">
            AI product alignment
          </Link>
          , and along the way, teach the next generation of AI enthusiasts.
          <p>
            My career started in machine learning, as an ML engineer for Mark
            Cuban Companies. To round out my skillset, I eventually pivoted to
            go-to-market roles at companies like Hex and Highlight, where I led
            growth teams. <p>Here's a summary of my work so far.</p>
          </p>
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        {jobs.map(({ title, role, description }) => (
          <div key={title}>
            <h2 className="font-medium text-xl mb-1 tracking-tighter">
              {title}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {role}
            </p>
            <p>{description}</p>
            <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
          </div>
        ))}
      </div>
    </section>
  );
}
