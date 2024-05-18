import ImageItem from "../ImagesItem/ImagesItem";
import list from './ImageList.module.css'
const ImagesList = ({ data, openModal }) => {
    return (
            <ul className={list.ul}>
                {data.map(dat => (
                    <ImageItem   key={dat.id} data={dat } onClick={openModal} />
                ))}
            </ul>
    )
}

export default ImagesList;