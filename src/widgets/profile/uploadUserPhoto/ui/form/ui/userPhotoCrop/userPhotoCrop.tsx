import React, { useState } from 'react'
import { Crop, ReactCrop } from 'react-image-crop'

import { useUploadAvatarMutation } from '@/services/profileService/profileEndpoints'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'
import Image from 'next/image'

import s from './userPhotoCrop.module.scss'

export const UserPhotoCrop = ({ userPhoto }: Props) => {
  const [crop, setCrop] = useState<Crop>()
  const [croppedImage, setCroppedImage] = useState<HTMLImageElement>()
  const [uploadAvatar] = useUploadAvatarMutation()
  const onImageLoaded = () => {
    setCrop({
      height: 95,
      unit: '%',
      width: 95,
      x: 3,
      y: 3,
    })
  }

  const onSave = () => {
    // Создаем временный canvas для сохранения обрезанного изображения
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (ctx && crop && croppedImage) {
      canvas.width = crop.width || 0
      canvas.height = crop.height || 0

      ctx.drawImage(
        croppedImage,
        crop.x || 0,
        crop.y || 0,
        crop.width || 0,
        crop.height || 0,
        0,
        0,
        crop.width || 0,
        crop.height || 0
      )

      canvas.toBlob(blob => {
        if (blob) {
          const formData = new FormData()

          blob && formData.append('file', blob)
          uploadAvatar({ file: formData })
        }
      }, 'image/jpeg')
    }
  }

  return (
    <>
      <ReactCrop aspect={1} circularCrop crop={crop} locked onChange={c => setCrop(c)}>
        <Image
          alt={'User Photo'}
          className={s.image}
          height={332}
          onLoad={onImageLoaded}
          ref={image => setCroppedImage(image as HTMLImageElement)}
          src={userPhoto}
          width={332}
        />
      </ReactCrop>
      <div className={s.button}>
        <Button type={'button'}>
          <Typography onClick={onSave} variant={'h3'}>
            Save
          </Typography>{' '}
        </Button>
      </div>
    </>
  )
}

type Props = {
  userPhoto: string
}
