import Link from "next/link";
import { ArrowLeft, Heart, Maximize2, Play, Search, Star, Tv } from "lucide-react";

const guideSections = [
  {
    title: "Start Watching",
    icon: Play,
    items: [
      "Open the home page and choose any channel card from the Browse view.",
      "Use the video controls to play, pause, change volume, or seek when the stream supports it.",
      "If a stream fails to load, select another channel from the list."
    ]
  },
  {
    title: "Find Channels",
    icon: Search,
    items: [
      "Search by channel name, country, group, or stream host.",
      "Use the group chips to narrow the list by category.",
      "Switch between Browse and Guide views depending on how you prefer to scan channels."
    ]
  },
  {
    title: "Save Favorites",
    icon: Heart,
    items: [
      "Select the heart or star button on a channel to save it.",
      "Open the Favorites group to see only saved channels.",
      "Favorites are stored in this browser, so they stay available when you return."
    ]
  },
  {
    title: "Player Tools",
    icon: Maximize2,
    items: [
      "Move your mouse or tap the player to show the player controls.",
      "Use the fullscreen button for a larger viewing experience.",
      "Use the mute button when you need quick audio control."
    ]
  }
];

export const metadata = {
  title: "User Guide | LiveTV",
  description: "Learn how to use the LiveTV player, search, favorites, and guide views."
};

export default function GuidePage() {
  return (
    <main className="guide-shell">
      <nav className="guide-nav" aria-label="Guide navigation">
        <Link href="/" className="nav-action">
          <ArrowLeft size={17} aria-hidden="true" />
          Home
        </Link>
      </nav>

      <section className="guide-hero">
        <div className="brand">
          <span className="brand-mark">
            <Tv size={22} aria-hidden="true" />
          </span>
          <span>LiveTV User Guide</span>
        </div>
        <h1>Use LiveTV with less trial and error.</h1>
        <p>
          This guide covers the core actions on the website: watching channels, searching the
          playlist, saving favorites, and controlling the player.
        </p>
      </section>

      <section className="guide-grid" aria-label="Website usage guides">
        {guideSections.map((section) => {
          const Icon = section.icon;

          return (
            <article key={section.title} className="guide-card">
              <div className="guide-card-heading">
                <span className="guide-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h2>{section.title}</h2>
              </div>
              <ol>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          );
        })}
      </section>

      <section className="guide-note" aria-label="Playlist note">
        <Star size={19} aria-hidden="true" />
        <div>
          <h2>Playlist Updates</h2>
          <p>
            The website reads channels from the M3U playlist file in the project root. After
            changing that file, restart the development server so the latest channels appear.
          </p>
        </div>
      </section>
    </main>
  );
}
