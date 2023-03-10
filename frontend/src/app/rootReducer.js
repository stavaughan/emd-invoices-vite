// Users and authentication
import settingsReducer from 'src/features/settings/settingsSlice';
import metalsReducer from 'src/features/metals/metalsSlice';

const rootReducer = {
    setting: settingsReducer,
	metal: metalsReducer,
}

export default rootReducer
