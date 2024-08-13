'use client';

import { useEffect } from 'react';

type Props = {
  dataHref: string;
};

const FacebookComment = (props: Props) => {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.fbAsyncInit = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.FB.init({
        appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
        cookie: true, // enable cookies to allow the server to access
        // the session
        xfbml: true, // parse social plugins on this page
        version: 'v18.0', // use version 2.1
      });
    };
  }, []);

  return (
    <div
      className="fb-comments w-full"
      data-href={props.dataHref || ''}
      data-width="100%"
    ></div>
  );
};

export default FacebookComment;
