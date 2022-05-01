import { errorMapper } from './modules/errorMapper'
import './mount'

export const loop = errorMapper(() => {
    // 遍历所有 creep 并执行上文中拓展的 work 方法
    Object.values(Game.creeps).forEach(creep => creep.work())
})
