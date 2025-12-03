import Button from '../components/Button';

function Hero(){
    return(
        <section>
            <h1>
                Powered by Automation
            </h1>
        
            <Button 
                destination='#'
                type='button'
                label='Get started'
            />
        </section>
    )
}

export default Hero;