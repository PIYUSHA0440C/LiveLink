import { LoaderIcon, LoaderPinwheelIcon } from 'lucide-react'
import React from 'react'
import { useThemeStore } from '../store/useThemeStore'

const PageLoader = ({ isConnecting = false }) => {

  const {theme} = useThemeStore();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4' data-theme={theme}>
      <LoaderIcon className='animate-spin size-10 text-primary' />
      {isConnecting && (
        <div className="text-center animate-pulse">
          <p className="text-sm font-medium text-base-content/80">Connecting to server...</p>
          <p className="text-xs text-base-content/50 mt-1">This may take a moment to establish a secure connection.</p>
        </div>
      )}
    </div>
  )
}

export default PageLoader
