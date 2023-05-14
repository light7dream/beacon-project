import { combineReducers } from 'redux';
import  {userReducer as user} from './UserReducer'
const rootReducer = combineReducers({
    user,
});
export default rootReducer;