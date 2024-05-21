import error from './ErrorMessage.module.css';
const ErrorMessag = () => {
  return (
      <div className={error.container}>
          <p className={error.text}>Whoops, something went wrong! Please try reloading this page!</p>
     </div>
  )
}

export default ErrorMessag