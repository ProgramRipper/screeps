import { errorMapper } from './modules/errorMapper'

export const loop = errorMapper(() => {
    console.log('Hello World!')
})