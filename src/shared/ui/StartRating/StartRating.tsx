import { classNames } from '@/shared/lib/classNames'
import { Icon } from '@/shared/ui/Icon'
import cls from './StarRating.module.sass'
import StarIcon from '@/shared/assets/icons/star.svg'
import { useState } from 'react'

interface StarRatingProps {
  classname?: string
  onSelect?: (starCount: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5]

export const StartRating = (props: StarRatingProps) => {
  const { classname, size = 30, selectedStars = 0, onSelect } = props

  const [isHovered, setIsHovered] = useState(0)
  const [isSelected, setIsSelected] = useState(selectedStars)

  const onHover = (star: number) => () => {
    setIsHovered(star)
  }
  const onLeave = () => {
    setIsHovered(0)
  }

  const onClick = (selected: number) => () => {
    setIsSelected(selected)
    onSelect?.(selected)
  }

  return (
    <div className={classNames(cls.StarRating)}>
      {stars.map((star) => (
        <Icon
          className={classNames(cls.star, {}, [isHovered >= star || star <= isSelected ? cls.hovered : cls.normal])}
          key={star}
          Svg={StarIcon}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(star)}
          onClick={onClick(star)}
        ></Icon>
      ))}
    </div>
  )
}
