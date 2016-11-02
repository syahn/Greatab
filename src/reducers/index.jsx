import { combineReducers } from 'redux'
import { todosReducer, visibilityReducer} from './todos/todo'

const Reducer = combineReducers({
  visibilityFilter : visibilityReducer,
  todos : todosReducer
})

export default Reducer
