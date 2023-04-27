import { type DropDownDirection } from '@/shared/types/ui'
import cls from '../styles/popup.module.sass'

export const mapDirectionClass: Record<DropDownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top right': cls.optionsTopRight,
  'top left': cls.optionsTopLeft
}
