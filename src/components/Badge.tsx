import type { BadgeProps } from '../../types/Types'

function Badge ({ label }: BadgeProps){
    return(
        <div className='py-4 px-6 rounded-full w-fit bg-[rgba(0,35,102,0.4)] border border-primaryColor'>
            {label}
        </div>
    )
}

export default Badge;