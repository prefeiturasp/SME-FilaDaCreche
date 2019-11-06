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
                    return (<a href="https://educacao.sme.prefeitura.sp.gov.br/mapa-dres/" target='_blank' ><p key={'p_' + i} className="p-link">{paragraph}</p></a>)
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
