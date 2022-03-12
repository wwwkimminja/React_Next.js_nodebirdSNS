
export const initialState ={

mainPosts:[{
    id:1,
    User:{
        id:1,
        nickname:'wwwk',
    },
    content:'first post #Hashtag # Express',
    Images:[{
        src:'https://www.sozai-library.com/wp-content/uploads/2014/10/2944.jpg'
    },{
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7tyST4SEG1mkWchlrWDcCvwWIq8RZCEiEuA&usqp=CAU'
    },{
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHbCUzKfcPxbyMWv0ptRQUyKevSz0-TykRQ&usqp=CAU'
    }],
    Comments:[{
        User:{
            nickname:'nero',
        },
        content:'Wow!!!It is so cute!!'
    },{
        User:{
            nickname:'kengi',
        },
        content:'I want him!!'
    }

    ]
}],
imagePaths:[],
postAdded:false,

}

const ADD_POST = 'ADD_POST';
export const addPost ={
    type:ADD_POST,

}
const dummyPost ={
    id:2,
    content:'This is a dummy',
    User:{
        id:1,
        nickname:'zero',

    },
    Image:[],
    Comments:[],

};
const reducer =(state =initialState,action)=>{
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts:[dummyPost,...state.mainPosts],
                postAdded:true,
            }
        default:
            return state;
    }
};

export default reducer;
