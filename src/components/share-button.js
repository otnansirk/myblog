import React from 'react'
import {
  WhatsappShareButton,
  FacebookShareButton,
  TelegramShareButton,
  LinkedinShareButton,  
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  LinkedinIcon
} from 'react-share'

const shareButton = () => {
  return (
    <div>
      <WhatsappShareButton
        className="button__share button__wa"
        url={window.location.href}
      >
        <WhatsappIcon className="button__share-button" size={30} borderRadius={5} ></WhatsappIcon>
      </WhatsappShareButton>

      <FacebookShareButton
        className="button__share button__fb"
        url={window.location.href}
      >
        <FacebookIcon className="button__share-button" size={30} borderRadius={5} />
      </FacebookShareButton>

      <TelegramShareButton
        className="button__share button__fb"
        url={window.location.href}
      >
        <TelegramIcon className="button__share-button" size={30} borderRadius={5} />
      </TelegramShareButton>

      <LinkedinShareButton
        className="button__share button__fb"
        url={window.location.href}
      >
        <LinkedinIcon className="button__share-button" size={30} borderRadius={5} />
      </LinkedinShareButton>
      
    </div>
  )
}

export default shareButton