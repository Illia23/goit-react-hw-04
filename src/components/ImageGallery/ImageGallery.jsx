import ImageCard from '../ImageCard/ImageCard';
import list from './ImageGallery.module.css'
const ImageGallery = ({ data, openModal }) => {
    return (
            <ul className={list.ul}>
                {data.map(dat => (
                    <ImageCard   key={dat.id} data={dat } onClick={openModal} />
                ))}
            </ul>
    )
}

export default ImageGallery;
