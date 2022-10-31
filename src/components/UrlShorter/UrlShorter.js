import React, { useState } from "react";
import "./UrlShorter.css";

import axios from "axios";

export default function UrlShorter() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const convertUrl = async () => {
    // const obj = {};
    // let shortURL = "short.ly/" + url.replace(/[^a-z]/g, "").slice(-4);
    // if (!obj[shortURL]) {
    //   obj[shortURL] = url;
    // }
    // setShortUrl(shortURL);

    const responseData = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${url}`
    );
    setShortUrl(responseData?.data?.result?.short_link);
  };

  function copyNewUrl() {
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }

  return (
    <div className="url-shorter__container">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-9 col-md-6">
            <input
              id="myInput"
              type="text"
              className="form-control"
              placeholder="Shorten a link here..."
              onChange={(e) => setUrl(e.target.value)}
              value={shortUrl ? shortUrl : url}
            />
          </div>
          <div className="col-lg-3 col-md-6 d-flex justify-content-center">
            {!shortUrl && (
              <button type="button" className="main-btn" onClick={convertUrl}>
                Shorten it!
              </button>
            )}
            {shortUrl && (
              <button
                type="button"
                className="btn btn-outline-light"
                onClick={copyNewUrl}
              >
                copy to clipboard
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
