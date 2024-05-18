import item from './ImagesItem.module.css'
const ImageItem = ({ data, onClick }) => {
    return (
        <li className={item.item}>
            <img className={item.img} src={data.urls.small} alt={data.alt_description} onClick={()=> onClick(data.urls.regular)}  />
        </li>
    )
}

export default ImageItem;