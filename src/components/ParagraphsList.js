import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from "@fortawesome/react-fontawesome/src/components/FontAwesomeIcon";
import { faExclamationCircle } from '@fortawesome/fontawesome-free-solid'

export const ParagraphsList = (props) => {
    return (<div>
        {props.paragraphs && props.paragraphs.map((paragraph, i) => {
                if (paragraph === ' Como funciona a fila da creche?') {
                    return (
                        <p key={'p_' + i}>
                            <FontAwesomeIcon icon={faExclamationCircle}/>
                            {paragraph}
                        </p>)
                } else if(paragraph === 'Veja aqui os contatos.') {
                    return (<a href="http://portal.sme.prefeitura.sp.gov.br/Main/Noticia/Visualizar/PortalSMESP/Demanda-nas-DREs" target='_blank'><p key={'p_' + i}>{paragraph}</p></a>)
                } else {
                    return (<p key={'p_' + i}>{paragraph}</p>)
                }

            }
        )
        }
    </div>)

};

ParagraphsList.propTypes = {
    paragraphs: PropTypes.arrayOf(PropTypes.string)
};
