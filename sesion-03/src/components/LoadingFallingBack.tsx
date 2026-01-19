
interface LoadingFallBackProps{
    message?:string
}

const LoadingFallingBack = ({message="Cargando datos"}:LoadingFallBackProps) => {
  return (
    <div className='flex item-center justify-center min-h-screen bg-gray-50'>
        <div className='text-center'>
            <div className='animate-spin rounded-full h-16 w-16 border-2 border-blue-800 mx-auto mb-4'>
            </div>
            <p className='text-gray-600 text-lg font-medium'>
                {message}
            </p>
        </div>
    </div>
  )
}

export default LoadingFallingBack