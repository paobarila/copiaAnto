import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../theme/theme';

const Record = ({chatHistory}) => {

  return (
    <div style={{height:'32.5625rem', width:'68rem', overflow:'hidden'}}>
      <div style={{overflow: 'auto', height: 'auto',  width: '75%', position: 'absolute', bottom: '0' }}>
      {
          chatHistory.map((message, index) => {
            const sendDate = new Date(message.sendDate);
            const fecha = sendDate.toLocaleDateString(); // Formato de fecha local
            const hora = sendDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Formato de hora local

            return (
              <li style={{ height: '4.625rem', textAlign: 'start' }} key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBlockEnd: '3px', marginBlockStart: '5px' }}>
                  <span>{message.transmitter}</span>
                  <span>{`${fecha} ${hora}`}</span>
                </div>
                <div style={{ display: 'inline-block', margin: '0', border: `1px solid ${theme.palette.accent.main}`, borderRadius: '1.25rem', paddingBlock: '0.8125rem', paddingInline: '1.4375rem' }}>
                  <span>{message.message}</span>
                </div>
              </li>
            );
          })
        }
        <p style={{color: theme.palette.accent.main, textAlign: 'start'}}>Tomas escribiendo...</p>
      </div>
    </div>
  )
}

Record.propTypes = {
  chatHistory: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Record