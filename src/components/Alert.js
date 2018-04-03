import React from 'react';

export class Alert extends React.Component {
  render() {
    return (
      <div className="alert alert-warning" role="alert" style={{"marginBottom": 0}}>
        <strong>Atenção!</strong> Este site está ainda em fase de testes. Mande <a href="https://docs.google.com/forms/d/e/1FAIpQLSdt8YXI3i7RdolEMh-TX1oes5zGpSnbE3Sy3-ioVLJTqvgGVQ/viewform" taget="_blank" style={{"textDecoration": "underline"}}>sugestões aqui</a>.
      </div>
    )
  }
}
