import { combineReducers } from 'redux'
import { todosReducer, visibilityReducer} from './todos/todo'
import { reducer as formReducer } from 'redux-form'

const Reducer = combineReducers({
  visibilityFilter : visibilityReducer,
  todos : todosReducer,
  form : formReducer
})

export default Reducer
