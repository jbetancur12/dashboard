import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';
import themeReducer from '@app/store/slices/themeSlice';
import pwaReducer from '@app/store/slices/pwaSlice';

export default {
  auth: authReducer,
  user: userReducer,
  theme: themeReducer,
  pwa: pwaReducer,
};
