import type { ButtonProps } from '../../types/Types'

function Button({ label, type, destination }: ButtonProps){
    return(
        <a href={destination}>
            <button type={type} className='primaryBtn sub-text text-textStrong'>
                {label}
            </button>
        </a>
    )
}

export default Button;