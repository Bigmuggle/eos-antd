import { type } from '../action'
const initialState = { //初始值
    menuName:'首页'
}
export default (state = initialState,action)=>{
    switch (action) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName:action.menuName
            }
        default:
            break;
    }
    
}