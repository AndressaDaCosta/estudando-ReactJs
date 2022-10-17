import { useState } from 'react'
import { Button }from './Button'
import { CampoTexto } from './CampoTexto'
import { List } from './List'
import './Form.css'

export function Form(props) {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    value={nome}
                    hasChanged={value => setNome(value)}
                />
                <CampoTexto
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    value={cargo}
                    hasChanged={value => setCargo(value)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    value={imagem}
                    hasChanged={value => setImagem(value)}
                />
                <List
                    required={true}
                    label="Time" 
                    itens={props.times}
                    value={time}
                    hasChanged={value => setTime(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}
