import React from 'react';
 
import "./letterCard.css"
import SoundIcon from "./sound.svg"







export default class LetterCard extends React.Component {
    state = {
        active: false,
    }
    setActive = () => {
        this.setState({active: true});
        this.props.answer()
    }
    pronunSound = (event) => {
        event.stopPropagation()
        const {letter} =  this.props
        const sound = new Audio(`/audio/${letter.soundSrcId}_.mp3`)
        sound.autoplay = false
        sound.play()
    }
render() {
    const {letter,isRight,order,toBeGone} = this.props
    const {rusSym,rusComm,pronun,geoName,engSym,} = letter
    let cardStyle = (this.state.active && !isRight) ? "letter-card  letter-card-active"  : "letter-card"
    if (toBeGone) {
        cardStyle = (cardStyle === "letter-card  letter-card-active") ? "letter-card letter-card-active letter-toBeGone"  : "letter-card letter-toBeGone"  
    }

        return (
            <div  onClick={this.setActive} className={cardStyle} style={{order: order }}>
                <div className='rus-sym-container'>
                    <div className='rus-sym'>{rusSym}</div>
                    <img src={SoundIcon} alt='' className='sound-icon'  onClick={(event) => this.pronunSound(event)}></img>
                </div>
                <div className='pronunciaton-container'>
                    <div className='pronunciaton-comment'>{rusComm}</div>
                    <div className='pronunciaton'>{pronun}</div>
                </div>
                <div className='extra-info-container'>
                    <div className='geo-name'>{geoName}</div>
                    <div className='eng-symbol'>{engSym}</div>
                </div>
            </div>
        )
    }}



