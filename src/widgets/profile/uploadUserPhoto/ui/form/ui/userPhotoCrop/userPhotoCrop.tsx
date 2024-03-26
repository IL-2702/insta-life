import { SyntheticEvent, useRef, useState } from 'react'
import { Crop, ReactCrop, centerCrop, convertToPixelCrop, makeAspectCrop } from 'react-image-crop'

import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'
import { canvasPreview } from '@/shared/utils/canvasPrieview'
import Image from 'next/image'

import s from './userPhotoCrop.module.scss'

export const UserPhotoCrop = ({ isLoading, uploadAvatar, userPhoto }: Props) => {
  const [crop, setCrop] = useState<Crop>()
  const [imgError, setImgError] = useState<boolean>(false)

  const imgRef = useRef<HTMLImageElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const onImageLoaded = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const { height, width } = e.currentTarget
    const crop = makeAspectCrop(
      {
        unit: 'px',
        width: 192,
      },
      1,
      width,
      height
    )
    const centeredCrop = centerCrop(crop, width, height)

    setCrop(centeredCrop)
  }
  const onSave = () => {
    canvasPreview(
      imgRef?.current,
      canvasRef.current,
      convertToPixelCrop(crop!, imgRef.current?.width!, imgRef.current?.height!)
    )

    canvasRef?.current?.toBlob(blob => {
      if (blob) {
        const formData = new FormData()

        blob && formData.append('file', blob)
        uploadAvatar(formData)
      }
    }, 'image/jpeg')
  }

  return (
    <>
      <ReactCrop aspect={1} circularCrop crop={crop} locked onChange={c => setCrop(c)}>
        {!imgError && (
          <Image
            alt={'User Photo'}
            className={s.image}
            height={332}
            onError={() => setImgError(true)}
            onLoad={onImageLoaded}
            ref={imgRef}
            src={userPhoto}
            width={332}
          />
        )}
      </ReactCrop>
      <div className={s.button}>
        <Button disabled={isLoading} isLoading={isLoading} onClick={onSave} type={'button'}>
          {!isLoading && <Typography variant={'h3'}>Save</Typography>}
        </Button>
      </div>
      {crop && <canvas ref={canvasRef} style={{ display: 'none' }} />}
    </>
  )
}

type Props = {
  isLoading: boolean
  uploadAvatar: (file: FormData) => void
  userPhoto: string
}
