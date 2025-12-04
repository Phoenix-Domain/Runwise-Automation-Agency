import type { ProcessCardProps } from '../../types/Types';
import Badge from '../components/Badge';
import ProcessCard from '../components/ProcessCard';

function Process(){
    const processCards: ProcessCardProps[] = [
        {
            id: 1,
            title:'Get started',
            steps:[
                'Fill out a simple form',
                'We send you automation suggestions based on your enquiry',
                'We contact you to book a call at a time that works'
            ]
        },
        {
            id: 2,
            title:'Understand Your Needs',
            steps:[
                'We talk through your challenges',
                'Decide together what tools and automations will help',
                'Agree on what success looks like'
            ]
        },
        {
            id: 3,
            title:'Build & Show',
            steps:[
                'We create the automation for you',
                'Share a demo so you can see it in action',
                'Make any changes you need',
                'Fully set it up for you'
            ]
        },
        {
            id: 4,
            title: 'Go Live & Support',
            steps: [
                'Complete payment',
                'Ongoing help to keep things running smoothly',
                'Updates whenever needed'
            ]
        }   
    ]
    return(
        <section>
            <Badge 
                label='How It Works'
            />

            <section>
                {
                    processCards.map(processCard => (
                        <ProcessCard 
                            id= {processCard.id}
                            title= {processCard.title}
                            steps= {processCard.steps}
            />
                    ))
                }
            </section>
            
        </section>
    )
}

export default Process;