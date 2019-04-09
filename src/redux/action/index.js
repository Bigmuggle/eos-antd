export const type ={ //声明类型
    SWITCH_MENU:"SWITCH_MENU"
}

export default function menuName(menuName){
    return {
        type: type.SWITCH_MENU,
        menuName
    }
}