import Link from "next/link";
// import { Suspense } from "react";

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        href={`/writing/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
          {/* <Suspense fallback={<p className="h-6" />}>
            <Views slug={slug} />
          </Suspense> */}
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm Haroon 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I lead the team at{" "}
        <span className="not-prose">
          <Badge href="https://autoblocks.ai/">
            <svg
              width="13"
              height="15"
              role="img"
              aria-label="Autoblocks logo"
              className="mr-1 inline-flex"
            >
              <use href="/sprite.svg#autoblocks" />
            </svg>
            Autoblocks AI
          </Badge>
        </span>
        , where we're working towards AI product alignment. Here's a summary of
        my career so far:
        <br />
        <br />
        <strong>Work</strong>: I worked in ML / data science roles at Mark Cuban
        Companies, Deloitte, and Komodo Health, and led growth marketing at
        startups like Hex and Highlight.
        <br />
        <br />
        <strong>School</strong>: I'm a UC Berkeley masters grad in data science,
        with a focus on ML. I'm also a proud first-gen college grad.
        <br />
        <br />
        <strong>Other</strong>: I founded AI For Anyone, one of the
        nation&apos;s most impactful AI education nonprofits, and Not A Bot, an
        AI newsletter with 50k+ subscribers.
      </p>
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="What is AI product alignment?"
          slug="what-is-ai-product-alignment"
        />
        <BlogLink
          name="Are we missing the point of evaluators?"
          slug="evaluators"
        />
        <BlogLink
          name="How do we get to AI product alignment"
          slug="path-to-ai-product-alignment"
        />
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/haroonchoudery"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>
        {/* <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://notabot.tech/subscribe"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">get email updates</p>
          </a>
        </li> */}
      </ul>
    </section>
  );
}
