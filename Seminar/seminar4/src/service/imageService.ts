
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { ImageCreateResponseDTO } from "../interfaces/image/ImageCreateResponseDTO";

const uploadImage = async (location: string) => {

  const data = await prisma.image.create({
    data: {
      image: location,
    },
  });

  const result: ImageCreateResponseDTO = {
    id: data.id,
    image: data.image as string,
  };

  return result;
};

const imageService = {
  uploadImage,
};

export default imageService;