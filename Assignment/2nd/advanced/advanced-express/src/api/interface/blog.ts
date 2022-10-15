import Comment from "./comment"
export default interface Blog {
    blogId: number,
    title: string,
    writer: string,
    content: string,
    comment?: Comment[]
}