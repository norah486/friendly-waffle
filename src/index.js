import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AllImages(props) {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + './Images/1-cats.png'} alt="cats" />
            <img src={process.env.PUBLIC_URL + './Images/beepbeep.png'} alt="beepbeep" />
            <img src={process.env.PUBLIC_URL + './Images/beepbeep2.png'} alt="beepbeep2" />
            <img src={process.env.PUBLIC_URL + './Images/beepboat.png'} alt="beepboat" />
            <img src={process.env.PUBLIC_URL + './Images/wideCatstare1.png'} alt="wideCatstare1" />
            <img src={process.env.PUBLIC_URL + './Images/wideCatstare2.png'} alt="wideCatstare2" />
            <img src={process.env.PUBLIC_URL + './Images/wideCatstare3.png'} alt="wideCatstare3" />
        </div>
    )
}

function ShowImages(props) {
    return <h1>Images below</h1>
}

function HideImages(props) {
    return (
        <h1>No Images to show.</h1>
    )
}

function ShowImagesHandler(props) {
    const hasBeenPressed = props.hasBeenPressed;
    if(hasBeenPressed) {
        return <ShowImages />
    }
    return <HideImages />
}

function HideImagesButton(props) {
    return (
        <div>
            <button onClick={props.onClick}>
                Hide Images
            </button>
            <AllImages />
        </div>
    );
}

function ShowImagesButton(props) {
    return (
        <button onClick={props.onClick}>
            Show Images
        </button>
    )
}

class ImageControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleHideImagesClick = this.handleHideImagesClick.bind(this);
        this.handleShowImagesClick = this.handleShowImagesClick.bind(this);
        this.state = {hasBeenPressed: false};
    }

    handleHideImagesClick() {
        this.setState({hasBeenPressed: false});
    }

    handleShowImagesClick() {
        this.setState({hasBeenPressed: true});
    }

    render() {
        const hasBeenPressed = this.state.hasBeenPressed;
        let images;

        if (hasBeenPressed) {
            images = <HideImagesButton onClick={this.handleHideImagesClick} />;
        } else {
            images = <ShowImagesButton onClick={this.handleShowImagesClick} />;
        }

        return (
            <div>
                <ShowImagesHandler hasBeenPressed={hasBeenPressed} />
                {images}
            </div>
        )
    }
}

// ========================================

ReactDOM.render(
    <ImageControl />,
    document.getElementById('root')
);
