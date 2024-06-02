import React, { useState } from 'react';
import RankingBox from '../../molecules/RankingBox/RankingBox.jsx';
import PaintBrush from '../../atoms/Icon/PaintBrush.jsx';
import Puzzle from '../../atoms/Icon/Puzzle.jsx';
import FlashOnOutlinedIcon from '../../atoms/Icon/Flash.jsx';
import Bulb from '../../atoms/Icon/Bulb.jsx';
import Megaphone from '../../atoms/Icon/Megaphone.jsx';
import BasicButton from '../../atoms/Buttons/BasicButton.jsx';
import InputFieldEv from '../../atoms/Input/index.jsx';
import theme from "../../../theme/theme.js";
import Popup from '../../../pages/PagePopupStar/PagePopupStar.jsx';
import PopupStart from '../../../pages/PagePopup/PagePopup.jsx';
import HeaderTeacher from '../../molecules/Header/index.jsx';
import './SelfEvaluationBox.css';


function SelEvaluationBox() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupStartOpen, setIsPopupStartOpen] = useState(false);

    const handleClickOk = () => {
        setIsPopupStartOpen(true);
    };

    const handleClickAutoEvaluation = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleClosePopupStart = () => {
        setIsPopupStartOpen(false);
    };

    return (
        
        <div className='form-container-SelEvaluationBox'>
            <div className='containe-Help'>
                <p><h1 style={{ color: theme.palette.primary.main }}>Autoevaluación</h1></p>
                <BasicButton
                    variant="outlined"
                    childrenIcon={<Bulb color='#592adc' width={28} />}
                    childrenText="Ok"
                    ariaLabel="abrir popup"
                    title="Ok"
                    borderRadius="1.25rem"
                    onClick={handleClickOk}
                />
            </div>

            <RankingBox
                title="Creatividad"
                question="¿Consideras que tus ideas ayudaron a hacer el proyecto grupal más interesante y original?"
                childrenIcon={<PaintBrush color='#592adc' width={28} />}
            />
            <RankingBox
                title="Colaboración"
                question="Piensa en cómo trabajaste contus compañeros en el proyecto¿Cómo calificarías que fue tu participación al momento de pensar y elegir ideas para trabajar?"
                childrenIcon={<Puzzle color='#592adc' width={28} />}
            />
            <RankingBox
                title="Pensamiento Crítico"
                question="Durante el proyecto con tu grupo, ¿Cómo consideras que fue tu participación al momento de pensar y elegir ideas para trabajar?"
                childrenIcon={<FlashOnOutlinedIcon color='#592adc' width={28} />}
            />
            <RankingBox
                title="Comunicación"
                question="Califica la comunicación (expresar tus ideas y escuchar atentamente a los otros compañeros) a lo largo del trabajo en grupo"
                childrenIcon={<Megaphone color='#592adc' width={28} />}
            />
             <InputFieldEv
                inputId="example"
                type="text"
                variant="outlined"
                fullWidth={true}
                textLabel="¿En qué crees que podrías mejorar?"
                /*value=*/
                /*onChange=*/
                placeholder='En el próximo proyecto podría mejorar la creatividad sumando otras maneras de ......'
                helperText=""
                multiline={false}
                rows={4}
                select={false}
                options={[{ value: 'opcion1', label: 'Opción 1' }, { value: 'opcion2', label: 'Opción 2' }]}
                required={true}
                disabled={false}
                childrenAdornment={<span></span>}

            />
            <div className='form-Container-SelEvaluationBox-Button'>
                <BasicButton
                    variant="contained"
                    childrenText="Guardar Autoevaluación"
                    ariaLabel="selfEvaluation"
                    title="Guardar Autoevaluación"
                    onClick={handleClickAutoEvaluation}
                    borderRadius="1.25rem"
                />
            </div>

            {isPopupOpen && <Popup onClose={handleClosePopup} />}
            {isPopupStartOpen && <PopupStart onClose={handleClosePopupStart} />}

            <div className='containe-Teacher'>
            <p><h1 style={{ color: theme.palette.primary.main }}>Comentarios del docente</h1></p>
            <div className='containe-Teacher-profile'>
            <HeaderTeacher/>
            <p><h1 style={{ color: theme.palette.primary.main }}>Ana López</h1></p>
            </div>
            <p>El docente aún no ha realizado un comentario sobre el proyecto</p>
            </div>
        </div>

    );
}

export default SelEvaluationBox;