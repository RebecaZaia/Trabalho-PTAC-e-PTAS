import PostCard from "./postCard";

export default function PostList() {
  return (
    <div className="flex flex-col items-center gap-6">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}