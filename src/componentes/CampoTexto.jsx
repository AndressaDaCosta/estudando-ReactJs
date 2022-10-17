import './CampoTexto.css'

export function CampoTexto(props) {

    const newPlaceholder = `${props.placeholder}...` 

    // let valor = 'Guilherme Silveira'

    // const [valor, setValor] = UseState('Andressa Da Costa')

    const typed = (evento) => {
        props.hasChanged(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={typed} required={props.required} placeholder={newPlaceholder}/>
        </div>
    )
}

