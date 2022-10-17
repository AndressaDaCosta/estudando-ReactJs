import { useState } from 'react'
import { Button }from './Button'
import { CampoTexto } from './CampoTexto'
import { List } from './List'
import './Form.css'

export function Form(props) {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    value={name}
                    hasChanged={value => setName(value)}
                />
                <CampoTexto
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    value={role}
                    hasChanged={value => setRole(value)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    value={image}
                    hasChanged={value => setImage(value)}
                />
                <List
                    required={true}
                    label="Time" 
                    itens={props.times}
                    value={team}
                    hasChanged={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}
