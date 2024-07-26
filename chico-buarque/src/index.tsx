import * as React from 'react';

interface IContainerSdk {
  jwt?: string
}

export default function ChicoBuarque({ jwt }: IContainerSdk) {
  return <div>
    <div>{jwt ? "Com JWT" : "Sem JWT"} </div>
    <div style={{
      width: 200,
      height: 200,
      background: "url(https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/chico-buarque-historia-capa-meme.png?w=740&h=415&crop=1&quality=50)",
      backgroundSize: "400px",
      backgroundPositionX: jwt ? "0px" : "-200px",
      transform:jwt ? "scaleX(-1)" : "scaleX(1)"
    }}>
    </div>
  </div>;
};