const initState = {
    projects:[
        {id: '1', title: 'Help out Mario', content: 'lorem ipsum euibfwb eubwbfui eiubfd iuefwb'},
        {id: '2', title: 'bUY Milk Binod', content: 'lorem ipsum euibfwb eubwbfui eiubfd iuefwb'},
        {id: '3', title: 'Play with Yoshi', content: 'lorem ipsum euibfwb eubwbfui eiubfd iuefwb'}
    ]
}
const projectReducers = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project' , action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default: 
            return state; 
    }
    
}
export default projectReducers