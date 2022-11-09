import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//* router -> controller -> service

//* 유저 생성
//* 유저 생성
const createUser = async (name: string, email: string, age: number) => {
  const data = await prisma.user.create({
    data: {
      userName: name,
      age,
      email,
    },
    //만약 DB필드명이 userName일 경우, userName = name
    //필드명만 잘 적는다면 순서는 고려하지 않아도됨
  });
  return data;
};
//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.user.findMany();
  //findUnique : Unique한 컬럼에만 사용한다
  return data;
};
//* 유저 정보 업데이트
const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      userName: name
    }
  })
};
//* 유저 삭제
const deleteUser = async (userId: number) => {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });
};


//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const userService = {
  getUserById,
  createUser,
  getAllUser,
  updateUser,
  deleteUser
};

export default userService;
