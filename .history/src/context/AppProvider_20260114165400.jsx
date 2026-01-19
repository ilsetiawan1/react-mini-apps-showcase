import { PostProvider } from './PostContext';
import { CalcProvider } from './CalcContext';
import Anime

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
