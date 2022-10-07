import { Image } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ id, path, tag }) => {
  return <Image src={path} alt={tag} />;
};
