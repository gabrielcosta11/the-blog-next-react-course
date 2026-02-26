import { postRepository } from "@/src/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export default async function PostsList() {

  const posts = await postRepository.findAll()

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        posts.map(post => {
          return (
            <div key={post.id} className="flex flex-col gap-3 group">
              <PostCoverImage
                imageProps={{
                  width: 1200,
                  height: 720,
                  src: post.coverImageUrl,
                  alt: post.title
                }}
                linkProps={{ href: `/post/${post.slug}` }}
              />

              <div className="flex flex-col gap-2 justify-center">
                <time dateTime={post.createdAt} className="text-slate-600 text-sm">
                  {post.createdAt}
                </time>

                <PostHeading url="#" as="h2">{post.title}</PostHeading>

                <p className="text-justify">
                  {post.excerpt}
                </p>
              </div>

            </div>
          )
        })
      }
    </div>
  );
}
