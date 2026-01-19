import { PostProvider } from './PostContext';
import { CalcProvider } from './CalcContext';
import AnimeC

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
