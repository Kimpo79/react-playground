import React, { useState, useEffect } from 'react'

export default ({ hqImage, lqImage, children }) => {
  const [isLoaded, setLoadingState] = useState(false)

  useEffect(() => {
    const hqImage = new Image()
    hqImage.src = hqImage
    hqImage.onload = setLoadingState(true)
  }, [])

  return (
    <div className="progressive-image-container">
      <div className="progressive-image-content">{children}</div>
      <div
        className="progressive-image-preload"
        style={{ backgroundImage: `url('${lqImage}')` }}
      >
        <div
          className={`progressive-image-loaded
      ${isLoaded && 'progressive-image-fade-in'}
    `}
          style={{
            backgroundImage: isLoaded ? `url('${hqImage}')` : 'none'
          }}
        />
      </div>
    </div>
  )
}
