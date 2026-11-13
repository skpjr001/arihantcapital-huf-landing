import type { SocialName } from "@/lib/site";

const paths: Record<SocialName, React.ReactNode> = {
  facebook: <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5H16.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" fill="currentColor" />,
  linkedin: (
    <>
      <path d="M6.5 9.5h-3V20h3V9.5zM5 4.5a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4z" fill="currentColor" />
      <path d="M9 9.5h2.9v1.4c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V20h-3v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V20H9V9.5z" fill="currentColor" />
    </>
  ),
  twitter: <path d="M4 4h4.5l3.6 5 4.2-5H19l-5.6 6.6L20 20h-4.5l-3.9-5.4L7 20H4.3l6-7L4 4z" fill="currentColor" />,
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
    </>
  ),
  youtube: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="3.5" fill="currentColor" />
      <path d="M10.5 9.5v5l4.3-2.5-4.3-2.5z" fill="#fff" />
    </>
  ),
};

export default function SocialIcon({ name }: { name: SocialName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5">
      {paths[name]}
    </svg>
  );
}
