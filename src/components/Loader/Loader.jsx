import { LoaderWrapper } from './Loader.styled';
import ContentLoader from 'react-content-loader';

export const Loader = ({ children }) => {
  return <LoaderWrapper>{children}</LoaderWrapper>;
};

export const MyLoader = props => (
  <>
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="24" y="-1" rx="2" ry="2" width="378" height="260" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="24" y="-1" rx="2" ry="2" width="378" height="260" />
    </ContentLoader>
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="24" y="-1" rx="2" ry="2" width="378" height="260" />
    </ContentLoader>
  </>
);
