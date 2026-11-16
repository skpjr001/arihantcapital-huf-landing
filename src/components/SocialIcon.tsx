import type { SocialName } from "@/lib/site";

const paths: Record<SocialName, React.ReactNode> = {
  facebook: (
    <path
      d="M9.2 21.5h4v-8h3.6l.4-4h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2H7.2l-.4 4h2.4v8z"
      fill="currentColor"
    />
  ),
  linkedin: (
    <>
      <path d="M7 9H3.5v11.5H7V9zM5.25 3.5a2 2 0 100 4 2 2 0 000-4z" fill="currentColor" />
      <path
        d="M9.5 9h3.3v1.6c.5-.9 1.7-1.9 3.5-1.9 3.6 0 4.2 2.3 4.2 5.3v6.5H17v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9H9.5V9z"
        fill="currentColor"
      />
    </>
  ),
  twitter: (
    <path
      d="M23.95 4.57a10 10 0 01-2.82.78 4.96 4.96 0 002.16-2.72c-.95.55-2 .96-3.13 1.18a4.92 4.92 0 00-8.38 4.48A13.98 13.98 0 011.64 3.16a4.82 4.82 0 00-.67 2.48c0 1.71.87 3.21 2.19 4.1a4.9 4.9 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.83 5 5 0 01-2.21.08 4.94 4.94 0 004.6 3.42A9.87 9.87 0 010 19.54a14 14 0 007.56 2.21c9.05 0 14-7.5 14-13.99 0-.21 0-.42-.02-.63A9.94 9.94 0 0024 4.59z"
      fill="currentColor"
    />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
    </>
  ),
  youtube: (
    <path
      fillRule="evenodd"
      d="M5.5 4.5h13a4 4 0 014 4v7a4 4 0 01-4 4h-13a4 4 0 01-4-4v-7a4 4 0 014-4zM10 8.5v7l6-3.5-6-3.5z"
      fill="currentColor"
    />
  ),
};

export default function SocialIcon({ name }: { name: SocialName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px]">
      {paths[name]}
    </svg>
  );
}
