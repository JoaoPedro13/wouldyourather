import React from 'react'

const Share = (props) => {

  return (
    <div>
      <a href={"whatsapp://send?text=" + process.env.REACT_APP_DOMAIN + "/post/" + props.id} data-action="share/whatsapp/share">Share via Whatsapp</a>
      <a href={"https://www.facebook.com/sharer/sharer.php?u=" + process.env.REACT_APP_DOMAIN + "/post/" + props.id} data-action="share/whatsapp/share">Share via Facebook</a>
      <a href={"https://twitter.com/share?ref_src=" + process.env.REACT_APP_DOMAIN + "/post/"} className="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

    </div>
  )
}

export default Share
