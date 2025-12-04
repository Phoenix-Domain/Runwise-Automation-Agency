import Badge from '../components/Badge';

function Tools(){
    const stack1 = [
        {
            tool: 'N8N',
            imgSrc: '/Tools_Logo/n8n-color.svg'
        },
        {
            tool: 'OpenAI',
            imgSrc: '/Tools_Logo/openai-svgrepo-com.svg'
        },
        {
            tool: 'Gemini',
            imgSrc: '/Tools_Logo/Google_Gemini_icon_2025.svg'
        },
        {
            tool: 'Claude',
            imgSrc: '/Tools_Logo/Claude_AI_symbol.svg 1.svg'
        },
        {
            tool: 'Google Sheets',
            imgSrc: '/Tools_Logo/Google_Sheets_Logo 1.svg'
        },
        {
            tool: 'Google Drive',
            imgSrc: '/Tools_Logo/google-drive 1.svg'
        },
        {
            tool: 'Gmail',
            imgSrc: '/Tools_Logo/gmail 1.svg'
        }
    ]

    const stack2 = [
        {
            tool: 'Google Maps',
            imgSrc: '/Tools_Logo/google-maps-platform 1.svg'
        },
        {
            tool: 'Slack',
            imgSrc: '/Tools_Logo/slack 1.svg'
        },
        {
            tool: 'Airtable',
            imgSrc: '/Tools_Logo/airtable 1.svg'
        },
        {
            tool: 'Clickup',
            imgSrc: '/Tools_Logo/ClickUp_idfty-HNVU_0.svg'
        },
        {
            tool: 'PostgresSQL',
            imgSrc: '/Tools_Logo/postgresql 1.svg'
        },
        {
            tool: 'Eleven Labs',
            imgSrc: '/Tools_Logo/elevenlabs 1.svg'
        },
        {
            tool: 'Excel',
            imgSrc: '/Tools_Logo/excel 1.svg'
        },
        {
            tool: 'Deepseek',
            imgSrc: '/Tools_Logo/deepseek-color.svg'
        }
    ]
    return(
        <section>
            <Badge 
                label='Our Stack'
            />

            <h3 className='text-center'>
                Tools We Use
            </h3>

            <section>
                <div>

                </div>

                <div>

                </div>
            </section>
        </section>
    )
}

export default Tools;