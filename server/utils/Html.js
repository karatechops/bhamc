/* eslint-disable react/no-danger*/
import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';

function Html({ content, state, scriptHash, vendorHash, cssHash, styles }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="web_section_id" content="R11935" />
        <title>Brand Central</title>
        <link href={`${cssHash}`} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__=${serialize(state, { isJSON: true })};`,
          }}
          charSet="UTF-8"
        />
        <script src={`${scriptHash}`} charSet="UTF-8" />
        <script src={`${vendorHash}`} type="text/javascript" />
      </body>
    </html>
  );
}

Html.propTypes = {
  scriptHash: PropTypes.string.isRequired,
  cssHash: PropTypes.string.isRequired,
  vendorHash: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  styles: PropTypes.string,
  state: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Html;
