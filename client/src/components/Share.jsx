import React from 'react'

const Share = (props) => {

  return (
    <div>
      <a href={"whatsapp://send?text=http://localhost.com/post/" + props.id} data-action="share/whatsapp/share">Share via Whatsapp</a>
      <a href={"https://www.facebook.com/sharer/sharer.php?u=" + "http://localhost.com/post/" + props.id} data-action="share/whatsapp/share">Share via Facebook</a>
      <a href="https://twitter.com/share?ref_src=www.google.com" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

    </div>
  )
}

export default Share
