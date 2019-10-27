import React from 'react'
// import { useStaticQuery } from 'gatsby'
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

const ShareButton = ({data}) => {
  console.log()
  const currentUrl = data.site.siteMetadata.baseUrl+data.markdownRemark.frontmatter.path
  
  return (
    <div>
      <WhatsappShareButton
        className="button__share button__wa"
        url={currentUrl}
      >
        <WhatsappIcon className="button__share-button" size={30} borderRadius={5} ></WhatsappIcon>
      </WhatsappShareButton>

      <FacebookShareButton
        className="button__share button__fb"
        url={currentUrl}
      >
        <FacebookIcon className="button__share-button" size={30} borderRadius={5} />
      </FacebookShareButton>

      <TelegramShareButton
        className="button__share button__fb"
        url={currentUrl}
      >
        <TelegramIcon className="button__share-button" size={30} borderRadius={5} />
      </TelegramShareButton>

      <LinkedinShareButton
        className="button__share button__fb"
        url={currentUrl}
      >
        <LinkedinIcon className="button__share-button" size={30} borderRadius={5} />
      </LinkedinShareButton>
      
    </div>
  )
}

export default ShareButton