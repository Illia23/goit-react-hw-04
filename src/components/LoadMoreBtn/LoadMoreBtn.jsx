import button from './LoadMoreBtn.module.css'
const LoadMoreBtn = ({ click }) => {
    return (
        <div className={button.container}>
           <button className={button.btn} onClick={click} >Load more</button>
        </div>
    )
}

export default LoadMoreBtn ;