import sharp from 'sharp'

export async function getImageResolution(filePath: string) {
  const { width, height } = await sharp(filePath).metadata()
  return { width, height }
}
