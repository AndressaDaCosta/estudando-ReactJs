import { Collaborator } from './Collaborator'
import './Team.css'

export function Team(props) {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.name}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Collaborator corDeFundo={props.corPrimaria}name={colaborador.name} role={colaborador.role} image={colaborador.image}/> )}
            </div>
        </section> 
        : ''
    )
}

