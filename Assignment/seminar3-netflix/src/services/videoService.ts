import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//* 생성
const createData = async (title: string, preview: string, is_series: boolean, actors: Array<String>) => {
    const data = await prisma.video.create({
        data: {
            title, preview, is_series, actors,
        },
    });
    return data;
};


//* 조회
const getData = async () => {
    const data = await prisma.video.findMany();
    console.log(data);
    return data;
};

//* 업데이트
const updateLike = async (video_id: number, is_liked: boolean) => {
    const data = await prisma.video.update({
        where: {
            video_id
        },
        data: {
            is_liked
        }
    })
};

//* 삭제
const deleteData = async (video_id: number) => {
    await prisma.video.delete({
        where: {
            video_id
        },
    });
};

const getVideoById = async (video_id: number) => {
    const video = await prisma.video.findUnique({
        where: {
            video_id,
        },
    });
    return video;
};

const videoService = {
    createData,
    getData,
    updateLike,
    deleteData,
    getVideoById
};

export default videoService;