import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarPros extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean,
}

export function Avatar({ hasBorder = true, ...props }: AvatarPros) {

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}  {...props} />
    )
}