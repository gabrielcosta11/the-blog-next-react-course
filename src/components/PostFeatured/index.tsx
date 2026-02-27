import clsx from "clsx";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { formatDistanceToNow } from "@/src/utils/fomart-datetime";
import { PostSummary } from "../PostSummary";
import { postRepository } from "@/src/repositories/post";
import { findAllPublicPostsCached } from "@/src/lib/post/queries";

export async function PostFeatured() {

    const posts = await findAllPublicPostsCached()
    const post = posts[0]

    const postLink = `/post/${post.slug}`

    return (
        <>
            <section className={clsx('grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group')}>

                <PostCoverImage
                    imageProps={{
                        width: 1200,
                        height: 720,
                        src: post.coverImageUrl,
                        alt: post.title,
                        priority: true
                    }}
                    linkProps={{ href: postLink }}
                />

                <PostSummary
                    createdAt={post.createdAt}
                    excerpt={post.excerpt}
                    postHeading='h1'
                    postLink={postLink}
                    title={post.title}
                />

            </section>
        </>
    )
}