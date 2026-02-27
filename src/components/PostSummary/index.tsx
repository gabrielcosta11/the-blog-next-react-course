import { formatDistanceToNow } from "@/src/utils/fomart-datetime";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";

type PostSummaryProps = {
    postHeading: 'h1' | 'h2',
    postLink: string,
    createdAt: string,
    title: string,
    excerpt: string
}

export function PostSummary({postHeading, postLink, createdAt, excerpt, title}: PostSummaryProps) {
    return (
        <div className="flex flex-col gap-2 justify-center">
            <PostDate createdAt={createdAt} formatDateRelative={true}/>

            <PostHeading url={postLink} as={postHeading}>{title}</PostHeading>

            <p className="text-justify">
                {excerpt}
            </p>
        </div>
    )
}