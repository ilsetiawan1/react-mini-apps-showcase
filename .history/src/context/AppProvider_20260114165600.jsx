import { PostProvider } from './PostContext';
import { CalcProvider } from './CalcContext';
import { AnimeProvider, AnimeProvider } from './AnimeContext';

const AppProvider = ({ children }) => {
  return (
    <PostProvider>
      <CalcProvider>
        <AnimeProvider>{children}</AnimeProvider>
      </CalcProvider>
    </PostProvider>
  );
};

export default AppProvider;
