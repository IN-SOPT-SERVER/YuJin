import Blog from "../interface/blog";
export const blogData: Blog[] = [
    {
        blogId: 1,
        title: "듄",
        writer: "뇽뇽",
        content: "듄",
        comment: [
            {
                commentId: 4,
                blogId: 1,
                writer: "듄",
                content: "티모시"
            },
            {
                commentId: 5,
                blogId: 1,
                writer: "듄",
                content: "조아"
            },
        ],
    },
    {
        blogId: 2,
        title: "홍대 맛집",
        writer: "산울림",
        content: "감자치즈전 ",
    },
    {
        blogId: 3,
        title: "나혼산 맛집",
        writer: "산울림",
        content: "감자치즈전 먹고싶습니다",
        comment: [
            {
                commentId: 6,
                blogId: 3,
                writer: "감자",
                content: "치즈 굿"
            },
            {
                commentId: 6,
                blogId: 3,
                writer: "지구제과",
                content: "얼그레이케이크"
            },
        ],
    }
];
