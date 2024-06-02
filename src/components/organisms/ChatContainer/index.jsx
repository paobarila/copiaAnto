import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Empty from '../../molecules/Empty';
import Record from '../../molecules/Record';
import {Input, Divider} from '@mui/material';
import BasicButton from '../../atoms/Buttons/BasicButton';
import theme from '../../../theme/theme';

//simulación chat
// import dataChat from '../../data/chat/chatEmpty.json';
// import dataChat from '../../../data/chat/chat.json';

const Chat = ({record}) => {
    const [chatHistory, setChatHistory] = useState(record);
    
    useEffect(() => {
        setChatHistory(record);
    }, [])

  return (
    <div style={{width:'68rem', height: '35.5625rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', padding: '20px', position: 'relative'}}>
        <div style={{height: 'calc(100% - 10.50rem)', position: 'absolute'}}>
            {chatHistory.length  > 0 ? (<Record chatHistory={chatHistory}/>) : (<Empty color={theme.palette.accent.main} title={'Todavía no hay mensajes para ver.'} subtitle={'Escribe y envía un mensaje a los demás participantes.'}/>)}  
        </div>
        <div style={{ width: '100%', position: 'absolute', bottom: '1.25rem'}}>
            <Divider variant="middle" sx={{borderColor: theme.palette.accent.main, opacity: 0.3, borderWidth: '2px'}} />
            <div style={{display: 'flex', width: 'calc(100% - 40px)', height: '3rem', justifyContent: 'space-between', alignContent: 'center', marginBlockStart: '20px', paddingInline: '20px'}}>
                <Input fullWidth variant="standard" placeholder='Escribir mensaje' sx={{height:'48px', width: '80%', '&:before': { borderBottom: 'none'}, '&:hover:not(.Mui-disabled):before': {borderBottom: 'none'},'&:after': {borderBottom: 'none'}}}/>
                <BasicButton variant="contained" color="primary" childrenText="Enviar" ariaLabel="enviar" title="enviar" onClick={() => console.log('Botón clickeado')} borderRadius={'6.25rem'}  height='3rem' width='8.6875rem'/>
            </div>
        </div>
    </div>
  )
}

Chat.propTypes = {
    record: PropTypes.object.isRequired
}

export default Chat