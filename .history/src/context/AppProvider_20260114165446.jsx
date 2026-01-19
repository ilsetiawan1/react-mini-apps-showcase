import { PostProvider } from './PostContext';
import { CalcProvider } from './CalcContext';
import { AnimeContext, AnimeProvider } from './AnimeContext';

const AppProvider = ({ children }) => {
  return (
    <PostProvider>
      <CalcProvider>
        <AnimeContext
        {children}
        </CalcProvider>
    </PostProvider>
  );
};

export default AppProvider;
