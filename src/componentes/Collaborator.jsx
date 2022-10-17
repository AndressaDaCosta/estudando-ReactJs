import './Collaborator.css'

export function Collaborator({ name, image, role, corDeFundo }){
    return (<div className='collaborator'>
        <div className='head' style={{ backgroundColor: corDeFundo }}>
            <img src={image} alt={name}/>
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{role}</h5>
        </div>
    </div>)
}