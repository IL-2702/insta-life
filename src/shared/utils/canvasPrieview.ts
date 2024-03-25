import { PixelCrop } from 'react-image-crop'

export async function canvasPreview(
  image: HTMLImageElement | null,
  canvas: HTMLCanvasElement | null,
  crop: PixelCrop,
  scale = 1,
  rotate = 0
) {
  if (!image || !canvas) {
    throw new Error('Image element is null')
  }

  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('No 2d context')
  }

  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  // devicePixelRatio slightly increases sharpness on retina devices
  // at the expense of slightly slower render times and needing to
  // size the image back down if you want to download/upload and be
  // true to the images natural size.
  const pixelRatio = window.devicePixelRatio
  // const pixelRatio = 1

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio)
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio)

  ctx.scale(pixelRatio, pixelRatio)
  ctx.imageSmoothingQuality = 'high'

  ctx.save()

  const cropX = crop.x * scaleX
  const cropY = crop.y * scaleY

  // 5) Move the crop origin to the canvas origin (0,0)
  ctx.translate(-cropX, -cropY)
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  )

  ctx.restore()
}
