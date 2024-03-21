/* eslint-disable @typescript-eslint/ban-types */
import type { FC } from 'react'

declare global {
  interface StorefrontFunctionComponent<P = Object> extends FC<P> {
    getSchema?(props: P): Object
    schema?: Object
    defaultProps?: Object
    title?: string
  }
}
