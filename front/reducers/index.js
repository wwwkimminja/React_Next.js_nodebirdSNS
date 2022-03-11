
const initialState ={
  user:{
      isLoggedIn :false,
      user:null,
      signUpdata:{},
      loginData:{},
  },
  post:{
      mainPosts:[],
  }
  
}

export const loginAction =(data)=>{
    return {
        type:'LOG_IN',
        data,

    }
}

export const logoutAction =()=>{
    return {
        type:'LOG_OUT',
        
    }
}
//async action creator

//action creator
const changeNickname =(data)=>{
    return{
        type:'CHANGE_NICKNAME',
        data,

    }
}
changeNickname('kanu');
//{
// type:'CHANGE_NICKNAME',
// data:'kanu',
//}


//(pre,action) => (next)
const rootReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'LOG_IN':
            return {
                ...state,
                user:{
                    ...state.user,
                    isLoggedIn:true,
                    user:action.data,
                },
            };
        case 'LOG_OUT':
            return {
                ...state,
                user:{
                    ...state.user,
                    isLoggedIn:false,
                    user:null,

                },
            };
        default:
            return{
                ...state,
            }
        

    }
};
export default rootReducer;