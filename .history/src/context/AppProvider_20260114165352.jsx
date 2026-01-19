import { PostProvider } from './PostContext';
import { CalcProvider } from './CalcContext';
import Ani

const AppProvider = ({ children }) => {
  return (
    <PostProvider>
      <CalcProvider>
        {children}
        </CalcProvider>
    </PostProvider>
  );
};

export default AppProvider;
