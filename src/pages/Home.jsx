import React, { useState } from 'react'
import QRCode  from 'qrcode'
import Description from '../components/Description'
import License from '../components/License'
const Home = () => {

  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')
  const [widthQR, setWidthQR] = useState('1000')
  const [estado, setEstado] = useState('Generar QR')

  const LizardQRGen = () => {
    QRCode.toDataURL(url,{
      width: widthQR,
      margin: 2
    },(err, url)=> {
      if (err) {
        return console.log('Lizard QR Error')

      }

      console.log(url)
      setQrcode(url)
      setEstado('¡QR Generado!')
    })
  }

  return (
    <div className='home-layout'>
      <h2 className='ui-title'>Convierte tus URL en códigos QR.</h2>
      <div className="form">
        <div className="info-column">
          <div className="range-slider">
            <p className='label'>Elige tu tamaño en píxeles.</p>
              <input className='range' type="range" min={'100'} max={'2000'} step={'100'} value={widthQR} onChange={(e) =>setWidthQR(e.target.value)}/>
              <div className="width-info">
                <p className='px'>100px</p>
                <p className='width-selected'>{widthQR && widthQR + 'px'}</p>
                <p className='px'>2000px</p>
              </div>
          </div>
          <div className="informacion">
            <p className='label'>Pega aquí tu URL</p>
            <input placeholder='Ej: www.example.com' value={url} onChange={(e) =>setUrl(e.target.value)}/>
            <button onClick={LizardQRGen}>{estado}</button>
          </div>
        </div>
      
        <div className="qr-code">
            {
              qrcode &&
              url.length !== 0 &&      
              <div className="url-message">
                <p>{url}</p>
              </div>
            }
            {
              qrcode 
              ? <div className='imagen-qr' style={{backgroundImage: `url(${qrcode})`}}>
              </div> 
              :
                <div className='imagen-qr escaner' style={{backgroundImage: `url(/escaner.png)`}}>
                  <p>Genera tu código QR</p>
                </div>
            }

          <div className="grid-options">
            { qrcode 
              ? <div className="qr-options">
                  <div className="download-options">
                    <a className='png-download' href={qrcode} download="lizard-qr">Descarga en PNG</a>
                    <a className='svg-download' target={'_blank'} href="https://api.whatsapp.com/send?text=Genera%20tu%20código%20QR%20en%20cuestión%20de%20segundos%20con%20Lizard%20🦎%20www.qrlizard.com">Comparte</a>
                  </div>
              </div>
          
              : ''
        }
        
          </div>
        </div>
      </div>
      <Description/>
      <License/>
    </div>
  )
}

export default Home
