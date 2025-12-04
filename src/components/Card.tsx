import type { CardProps } from '../../types/Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ icon, title, content }: CardProps){
       return (
        <article className='flex flex-col p-6 gap-6 bg-[rgba(102,123,163,0.2)] rounded-xl'>
            <div className='flex flex-col gap-2'>
                <div className='p-4 w-14 h-14 rounded-full bg-[rgba(0,35,102,0.4)] border border-primaryColor flex items-center'>
                    <FontAwesomeIcon icon={icon} size='lg' />
                </div>

                <h4>
                    {title}
                </h4>
            </div>

            <p className="sub-text">
                {content}
            </p>
        </article>
    )
}

export default Card;