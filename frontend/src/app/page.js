import Header from "@/components/layout/header";
import Filters from "@/components/feed/filters";
import PostList from "@/components/feed/postList";
import HeroCarousel from "@/components/layout/heroCarousel";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <HeroCarousel />

      <div className="max-w-5xl mx-auto p-6">
        <Filters />
        <PostList />
      </div>
    </div>
  );
}