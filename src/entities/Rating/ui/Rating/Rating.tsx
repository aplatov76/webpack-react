import { Card } from '@/shared/ui/Card'
import { classNames } from '@/shared/lib/classNames'
import cls from './Rating.module.sass'
import { VStack, HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { StartRating } from '@/shared/ui/StartRating'
import { useCallback, useState } from 'react'
import { Button, Modal } from '@/shared/ui'
import { Input } from '@/shared/ui/Input'
import { ThemeButton } from '@/shared/ui/Button'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer'

interface RatingProps {
  classname?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  rate?: number
  max?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const Rating = (props: RatingProps) => {
  const { title, classname, feedbackTitle, hasFeedback = true, onCancel, onAccept, rate, max } = props

  const [starsCount, setStarsCount] = useState(0)
  const [feedback, setFeedback] = useState('')

  const onSelectStars = useCallback(
    (selectedStars: number) => {
      setStarsCount(selectedStars)
      if (hasFeedback) {
        setIsOpenModal(true)
      } else {
        onAccept?.(starsCount)
      }
    },
    [starsCount]
  )
  const [isOpenModal, setIsOpenModal] = useState(false)

  const acceptHandle = useCallback(() => {
    setIsOpenModal(false)
    onAccept?.(starsCount, feedback)
  }, [starsCount, feedback])

  const cancelHandle = useCallback(() => {
    setIsOpenModal(false)
    onCancel?.(starsCount)
  }, [starsCount])

  const modalContent = (
    <VStack max gap={'12'}>
      <Text title={feedbackTitle}></Text>
      <Input value={feedback} onChange={setFeedback} placeholder="Ваш отзыв"></Input>
      <HStack max gap={'12'} justify="end">
        <Button theme={ThemeButton.OUTLINE} onClick={cancelHandle}>
          Закрыть
        </Button>
        <Button onClick={acceptHandle}>Отправить</Button>
      </HStack>
    </VStack>
  )

  return (
    <Card max classname={classNames(cls.Rating)}>
      <VStack>
        <Text title={title} />
        <StartRating size={40} onSelect={onSelectStars} selectedStars={rate} />
      </VStack>

      <BrowserView>
        <Modal isOpen={isOpenModal} lazy onClose={() => setIsOpenModal(false)}>
          {modalContent}
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isOpenModal} lazy>
          {modalContent}
        </Drawer>
      </MobileView>
    </Card>
  )
}
