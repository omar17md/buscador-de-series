export default function NotFound () {
  return (
    <>
      <div className='d-flex flex-column mt-5 justify-content-center align-items-center'>
        <img src='../assets/404.jpg' alt='Code 404' style={{ width: 600 }} />
        <div className='alert alert-danger mt-5' role='alert'>
          Page not found! Please go to  <a href='/bingewatching/' className='alert-link'>Home</a>. Give it a click if you like.
        </div>
      </div>
    </>
  )
}
