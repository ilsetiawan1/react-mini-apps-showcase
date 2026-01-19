import { PostProvider } from './PostContext';
import { CalcProvider } from './CalcContext';
import { AnimeProvider } from './AnimeContext';

const AppProvider = ({ children }) => {
  return (
    <PostProvider>
      <CalcProvider>
        <Anime
        {children}
        </CalcProvider>
    </PostProvider>
  );
};

export default AppProvider;
