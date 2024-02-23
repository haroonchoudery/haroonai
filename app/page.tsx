import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm Haroon 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I&apos;m currently CEO at{" "}
        <Link href="https://autoblocks.ai">Autoblocks AI</Link>. Previously, I
        worked in data science roles at Mark Cuban Companies, Deloitte, and
        Komodo Health, and led growth at startups like Hex and Highlight.
        <br />
        <br />
        I&apos;m also co-founder of AI For Anyone, one of the nation&apos;s most
        impactful AI education nonprofits, and Not A Bot, an AI newsletter with
        50k+ subscribers.
      </p>
    </section>
  );
}
