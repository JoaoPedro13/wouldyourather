import React from "react";
import whatsapp from "../whatsapp.png";
import facebook from "../facebook.png";
import tweet from "../tweet.png";

const Share = props => {
  return (
    <div className="share-buttons">
      <a
        href={
          "https://www.facebook.com/sharer/sharer.php?u=" +
          process.env.REACT_APP_DOMAIN +
          "/post/" +
          props.id
        }
        data-action="share/facebook/share"
      >
        <img src={facebook} alt="facebook" />
      </a>

      <a
        href={
          "https://twitter.com/share?ref_src=" +
          process.env.REACT_APP_DOMAIN +
          "/post/" +
          props.id
        }
        className="twitter-share-button"
        data-show-count="false"
      >
        <img src={tweet} alt="tweet" />
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>

      <a
        href={
          "whatsapp://send?text=" +
          process.env.REACT_APP_DOMAIN +
          "/post/" +
          props.id
        }
        data-action="share/whatsapp/share"
      >
        <img src={whatsapp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default Share;
