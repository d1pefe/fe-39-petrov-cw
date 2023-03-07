// import {useDispatch} from "react-redux";
//
// const changeThemeAction = (payload) => {
//     return{
//         type: "CHANGE_THEME",
//         payload,
//     };
// };
//
//
// const themeReducer = (state, action) => {
//     switch(action.type){
//         case 'CHANGE_THEME':
//             return {...state, theme: action.payload}
//         default:
//             return state
//     }
// }
//
// const Comp = () => {
//     const dispatch = useDispatch()
//
//     const onChangeTheme = () => {
//         dispatch(changeThemeAction('DARK'))
//     }
// }