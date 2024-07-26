import * as React from 'react';

interface IContainerSdk {
  jwt?: string
}

export default function Stone({ jwt }: IContainerSdk) {

  console.log(jwt);

  return <div>
    <div>Solid</div>
    <img width="180" src="https://img.redbull.com/images/c_fill,g_auto,w_1000,h_666/q_auto,f_auto/redbullcom/2015/04/09/1331715947519_2/%C2%A9-mitsuo-ambe-getty-images.jpg"></img>
  </div>;
};