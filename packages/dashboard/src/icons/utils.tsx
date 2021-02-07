import { SvgIcon } from '@material-ui/core'
import { ReactNode, forwardRef } from 'react'

export function createIcon(name: string, svg: ReactNode, viewBox?: string): typeof SvgIcon {
    const Icon = function Icon(props: any, ref: any) {
        return <SvgIcon viewBox={viewBox} {...props} ref={ref} children={svg} />
    } as any
    Icon.displayName = `Icon (${name})`
    return forwardRef(Icon) as typeof SvgIcon
}
