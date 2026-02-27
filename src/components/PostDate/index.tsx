import { formatDateTime, formatDistanceToNow } from "@/src/utils/fomart-datetime";

type PostDateProps = {
    createdAt: string,
    formatDateRelative?: boolean
}

export function PostDate({createdAt, formatDateRelative = false}: PostDateProps) {
    return (
        <time dateTime={createdAt} className="text-slate-600 text-sm">
            {formatDateRelative ? formatDistanceToNow(createdAt) : formatDateTime(createdAt)}
        </time>
    )
}