import './greetingContainer.css'

export const GreetingContainer = (props) => {
    return (
        <div>
            <h1 className='greetText'> {props.message} </h1>
        </div>
    );
}


