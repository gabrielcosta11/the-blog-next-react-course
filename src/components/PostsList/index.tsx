import { postRepository } from "@/src/repositories/post";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";
import { findAllPublicPostsCached } from "@/src/lib/post/queries";

export default async function PostsList() {

  const posts = await findAllPublicPostsCached()

  return (
    <div className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {
        posts.slice(1).map(post => {

          const postLink = `/post/${post.slug}`

          return (
            <div key={post.id} className="flex flex-col gap-3 group">
              <PostCoverImage
                imageProps={{
                  width: 1200,
                  height: 720,
                  src: post.coverImageUrl,
                  alt: post.title
                }}
                linkProps={{ href: postLink }}
              />

              <PostSummary
                createdAt={post.createdAt}
                excerpt={post.excerpt}
                postHeading='h2'
                postLink={postLink}
                title={post.title}
                key={post.id}
              />

            </div>
          )
        })
      }
    </div>
  );
}
