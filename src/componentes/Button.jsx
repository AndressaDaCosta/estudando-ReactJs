import './Button.css'

export function Button(props) {
    return (
        <div className='wrapper'>
    <button className='button'>
        {props.children}
    </button>
    </div>
    )
}

