import button from './Button.module.css'
const Button = ({ click }) => {
    return (
        <div className={button.container}>
           <button className={button.btn} onClick={click} >Load more</button>
        </div>
    )
}

export default Button;