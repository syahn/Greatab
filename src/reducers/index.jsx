import { combineReducers } from 'redux'
import { todosReducer, visibilityReducer} from './todos/todo'
import { selectedReddit, postsByReddit} from './feeds/feed'


const Reducer = combineReducers({
  visibilityFilter : visibilityReducer,
  todos : todosReducer,
  selectedReddit,
  postsByReddit
})

export default Reducer
