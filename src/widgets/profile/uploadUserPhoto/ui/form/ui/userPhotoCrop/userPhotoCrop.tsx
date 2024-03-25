import React, { useRef, useState } from 'react'
import { Crop, ReactCrop, centerCrop, convertToPixelCrop, makeAspectCrop } from 'react-image-crop'

import { useUploadAvatarMutation } from '@/services/profileService/profileEndpoints'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'
import { canvasPreview } from '@/shared/utils/canvasPrieview'
import Image from 'next/image'

import s from './userPhotoCrop.module.scss'

export const UserPhotoCrop = ({ userPhoto }: Props) => {
  const [crop, setCrop] = useState<Crop>()

  const imgRef = useRef<HTMLImageElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [uploadAvatar] = useUploadAvatarMutation()
  const onImageLoaded = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
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
        uploadAvatar({ file: formData })
      }
    }, 'image/jpeg')
  }

  return (
    <>
      <ReactCrop aspect={1} circularCrop crop={crop} locked onChange={c => setCrop(c)}>
        <Image
          alt={'User Photo'}
          className={s.image}
          height={332}
          onLoad={onImageLoaded}
          ref={imgRef}
          src={userPhoto}
          width={332}
        />
      </ReactCrop>
      <div className={s.button}>
        <Button onClick={onSave} type={'button'}>
          <Typography variant={'h3'}>Save</Typography>{' '}
        </Button>
      </div>
      {crop && <canvas ref={canvasRef} style={{ display: 'none' }} />}
    </>
  )
}

type Props = {
  userPhoto: string
}
