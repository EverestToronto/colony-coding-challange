import React, { Component } from 'react';

class AvatarWithPopover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedAvatarIndex: null,
            displayedAvatar: null,
            avatars: [],
            popoverBoolean: false,
            newAvatarIndex: null
        };
    } 

    componentDidMount() {
        if(this.props.avatars) {
            let firstAvatar = this.props.avatars[0]
            this.setState({ displayedAvatarIndex: 0, displayedAvatar: firstAvatar.src, avatars: this.props.avatars })
        }
    }

    mainAvatarClick() {
        if(!this.state.popoverBoolean) {
            console.log('Open')
            document.getElementById('daPopover').classList.remove('overbounceClosePopover');
            document.getElementById('daPopover').classList.add('overbounceOpenPopover');
            this.setState({ popoverBoolean: true })
        } else {
            document.getElementById('daPopover').classList.remove('overbounceOpenPopover');
            document.getElementById('daPopover').classList.add('overbounceClosePopover');
            this.setState({ popoverBoolean: false })
        }
    }

    avatarSelected(index) {
        if(index === this.state.displayedAvatarIndex) {
            this.mainAvatarClick();
        } else {
            // New avatar selected
            console.log(this.state.avatars[index]);
            let selectedAvatar = this.state.avatars[index];
            // set the spinner around the clicked (by setting this.state.newAvatarIndex)
                // This will be hooked up to a class on each image that when shown will show the preloader around the image

            this.setState({ newAvatarIndex: index })
            setTimeout(() => {
                console.log('done');
                this.setState({
                    displayedAvatarIndex: index,
                    displayedAvatar: selectedAvatar['src'],
                    newAvatarIndex: null
                })
                this.mainAvatarClick();
            }, 1000)
        }
    }

    closePopover() {
        if(this.state.popoverBoolean) {
            this.mainAvatarClick();
        }
    }

    render() {
        if(this.state.displayedAvatar) {
            return (
                <div className="container">
                    <div className="main">
                        <div className="avatar">
                            <img 
                                src={this.state.displayedAvatar}
                                onClick={() => this.mainAvatarClick()}
                                alt=""
                            />
                        </div> 
                        <div
                            id="daPopoverContainer"
                            onClick={() => this.closePopover()}
                            style={ this.state.popoverBoolean ? {display: 'initial'} : {display: 'none'}}
                        ></div>
                        <div id="daPopover" className="popover">
                            <p>Choose your avatar</p>   
                            <ul className="avatars">
                                {
                                    this.state.avatars.map((avatar, index) => {
                                        return (
                                            <li 
                                                className="avatarDiv" 
                                                key={index}
                                                onClick={() => this.avatarSelected(index)}
                                            >
                                                <div
                                                    className={ this.state.displayedAvatarIndex === index ? '' : 'avatarHoverEffect'}
                                                ></div>
                                                <div
                                                    className={ this.state.newAvatarIndex === index ? 'selectedAvatarSpinner' : ''}
                                                ></div>
                                                <img 
                                                    src={avatar.src}
                                                    alt={avatar.label} 
                                                    style={ this.state.displayedAvatarIndex === index ? {border: 'rgba(122, 161, 178, 0.8) solid 3px'} : {border: '#2c3033 solid 3px'}}
                                                />
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div> 
            )
        }
    }
}

export default AvatarWithPopover;