import React from 'react';
 
import "./guess.css"
import LetterCard from '../letter-card';







export default class Guess extends React.Component {


    state = {
        geoAlphData:
            [{ geoSym: 'ა', geoName: 'ani', engSym: 'a', pronun: '/ɑ/', rusSym: 'а', rusComm: null,soundSrcId: "1" },
            { geoSym: 'ბ', geoName: 'bani', engSym: 'b', pronun: '/b/', rusSym: 'б', rusComm: null,soundSrcId: "2" },
            { geoSym: 'გ', geoName: 'gani', engSym: 'g', pronun: '/ɡ/', rusSym: 'г', rusComm: null,soundSrcId: "3" },
            { geoSym: 'დ', geoName: 'doni', engSym: 'd', pronun: '/d/', rusSym: 'д', rusComm: null,soundSrcId: "4" },
            { geoSym: 'ე', geoName: 'eni', engSym: 'e', pronun: '/ɛ/', rusSym: 'э/е', rusComm: null,soundSrcId: "5" },
            { geoSym: 'ვ', geoName: 'vini', engSym: 'v', pronun: '/v/', rusSym: 'в', rusComm: null,soundSrcId: "6" },
            { geoSym: 'ზ', geoName: 'zeni', engSym: 'z', pronun: '/z/', rusSym: 'з', rusComm: null,soundSrcId: "7" },
            { geoSym: 'თ', geoName: 'tani', engSym: 't', pronun: '/tʰ/', rusSym: 'т', rusComm: 'на выдохе',soundSrcId: "8" },
            { geoSym: 'ი', geoName: 'ini', engSym: 'i', pronun: '/i/', rusSym: 'и', rusComm: null,soundSrcId: "9" },
            { geoSym: 'კ', geoName: 'k’ani', engSym: 'k’', pronun: '/k’/', rusSym: 'к', rusComm: 'резкое',soundSrcId: "10" },
            { geoSym: 'ლ', geoName: 'lasi', engSym: 'l', pronun: '/l/', rusSym: 'л', rusComm: null,soundSrcId: "11" },
            { geoSym: 'მ', geoName: 'mani', engSym: 'm', pronun: '/m/', rusSym: 'м', rusComm: null,soundSrcId: "12" },
            { geoSym: 'ნ', geoName: 'nari', engSym: 'n', pronun: '/n/', rusSym: 'н', rusComm: null,soundSrcId: "13" },
            { geoSym: 'ო', geoName: 'oni', engSym: 'o', pronun: '/ɔ/', rusSym: 'о', rusComm: null,soundSrcId: "14" },
            { geoSym: 'პ', geoName: 'p’ari', engSym: 'p’', pronun: '/p’/', rusSym: 'п', rusComm: 'резкое',soundSrcId: "15" },
            { geoSym: 'ჟ', geoName: 'zhani', engSym: 'zh', pronun: '/ʒ/', rusSym: 'ж', rusComm: 'мягкое',soundSrcId: "16" },
            { geoSym: 'რ', geoName: 'rae', engSym: 'r', pronun: '/r/', rusSym: 'р', rusComm: null,soundSrcId: "17" },
            { geoSym: 'ს', geoName: 'sani', engSym: 's', pronun: '/s/', rusSym: 'с', rusComm: null,soundSrcId: "18" },
            { geoSym: 'ტ', geoName: 't’ari', engSym: 't’', pronun: '/t’/', rusSym: 'т', rusComm: 'резкое',soundSrcId: "19" },
            { geoSym: 'უ', geoName: 'uni', engSym: 'u', pronun: '/u/', rusSym: 'у', rusComm: null,soundSrcId: "20" },
            { geoSym: 'ფ', geoName: 'pari', engSym: 'p', pronun: '/pʰ/', rusSym: 'п', rusComm: 'легкое',soundSrcId: "21" },
            { geoSym: 'ქ', geoName: 'kani', engSym: 'k', pronun: '/kʰ/', rusSym: 'к', rusComm: 'легкое',soundSrcId: "22" },
            { geoSym: 'ღ', geoName: 'ghani', engSym: 'gh', pronun: '/ɣ/', rusSym: 'г/х', rusComm: null,soundSrcId: "23" },
            { geoSym: 'ყ', geoName: 'q’ari', engSym: 'q’', pronun: '/q’/', rusSym: 'к/х', rusComm: 'глубокое',soundSrcId: "24" },
            { geoSym: 'შ', geoName: 'shini', engSym: 'sh', pronun: '/ʃ/', rusSym: 'ш', rusComm: null,soundSrcId: "25" },
            { geoSym: 'ჩ', geoName: 'chini', engSym: 'ch', pronun: '/t͡ʃʰ/', rusSym: 'ч', rusComm: 'легкое',soundSrcId: "26" },
            { geoSym: 'ც', geoName: 'tsani', engSym: 'ts', pronun: '/t͡sʰ/', rusSym: 'ц', rusComm: 'легкое',soundSrcId: "27" },
            { geoSym: 'ძ', geoName: 'dzili', engSym: 'dz', pronun: '/d͡z/', rusSym: 'дз', rusComm: null,soundSrcId: "28" },
            { geoSym: 'წ', geoName: 'ts’ili', engSym: 'ts’', pronun: '/t͡s’/', rusSym: 'ц', rusComm: 'резкое',soundSrcId: "29" },
            { geoSym: 'ჭ', geoName: 'ch’ari', engSym: 'ch’', pronun: '/t͡ʃ’/', rusSym: 'ч', rusComm: 'резкое',soundSrcId: "30" },
            { geoSym: 'ხ', geoName: 'khani', engSym: 'kh', pronun: '/x/', rusSym: 'х', rusComm: 'глубокое',soundSrcId: "31" },
            { geoSym: 'ჯ', geoName: 'jani', engSym: 'j', pronun: '/d͡ʒ/', rusSym: 'дж', rusComm: null,soundSrcId: "32" },
            { geoSym: 'ჰ', geoName: 'hae', engSym: 'h', pronun: '/h/', rusSym: 'х', rusComm: 'легкое' ,soundSrcId: "33"},],
        idData: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
      
        isPointsCredited: false,
        pointStreak: 0,
        answerStatus: null,
        letterID: null,
        rightLetter: null,                     
        wrongLetter1: null,
        wrongLetter2: null,
        prevLetter: null,
        pointsTotal: 0,
        toBeGone: false,
        gameOver: false,
    }

    componentDidMount() {
        const { idData, geoAlphData, } = this.state
        const startID = this.randomElem(idData)
        const rightLetter = geoAlphData[idData[startID]]
        const wrongVars = this.updateWrongVars(rightLetter)
        this.setState({ letterID: startID,wrongLetter1: wrongVars[0],wrongLetter2:wrongVars[1],randomNum:  Math.random(),rightLetter: rightLetter})
 
    }

    updateWrongVars = (rightLetter) => {
        const {  geoAlphData } = this.state
        
        let wrongLetter1 = geoAlphData[this.randomElem(geoAlphData)]
        while (rightLetter.geoSym === wrongLetter1.geoSym) {
            wrongLetter1 = geoAlphData[this.randomElem(geoAlphData)]
        }
      
        let wrongLetter2 = geoAlphData[this.randomElem(geoAlphData)]
        while (rightLetter.geoSym === wrongLetter2.geoSym || wrongLetter1.geoSym === wrongLetter2.geoSym) {
            wrongLetter2 = geoAlphData[this.randomElem(geoAlphData)]
        }

        return [wrongLetter1,wrongLetter2]
    }
    randomElem(array) {
        return Math.floor(Math.random() * (array.length - 1)) 
    }

    nextLetter = () => {
        const { letterID, idData,geoAlphData } = this.state
        this.setState({ prevLetter: this.state.geoAlphData[idData[letterID]],toBeGone: true }) // for animation

        const newArr = Array.from(idData)
        newArr.splice(letterID, 1)
        if (newArr.length === 0) {
            this.setState({gameOver: true})
            return
        }
         console.log(idData + '  -    ' + idData[letterID] +  '   =    ' + newArr)
        const newLetterID = this.randomElem(newArr)
        // console.log(idData[newLetterID])
        const rightLetter = geoAlphData[newArr[newLetterID]]
        const wrongVars = this.updateWrongVars(rightLetter)
        this.setState({ idData: newArr, letterID: newLetterID,isPointsCredited: false })
        setTimeout(() => {this.setState({toBeGone: false,wrongLetter1: wrongVars[0],wrongLetter2:wrongVars[1],rightLetter: rightLetter }); }, 425);

    }
    newGame = () => {
        const {geoAlphData} = this.state
        const idData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
        const startID = this.randomElem(idData)
        const rightLetter = geoAlphData[idData[startID]]
        const wrongVars = this.updateWrongVars(rightLetter)
      
        this.setState({ letterID: startID,wrongLetter1: wrongVars[0],wrongLetter2:wrongVars[1],randomNum:  Math.random(),pointsTotal: 0,
            idData: idData,toBeGone: false,pointStreak: 0, rightLetter: rightLetter,isPointsCredited: false, gameOver: false})
    }
    wrongAnsw = () => {
        if (!this.state.isPointsCredited)
       this.setState({ pointsTotal: (this.state.pointsTotal - 1),pointStreak: 0,isPointsCredited: true })
    }

    rightAnsw = () => {
        const bonus = (this.state.pointStreak > 6) ? 2 : 
         (this.state.pointStreak > 3) ? 1 : 0;
        this.setState({ pointsTotal: (this.state.pointsTotal + 1 + bonus),pointStreak: (this.state.pointStreak + 1), randomNum: Math.random()})

        this.nextLetter()
    }

    render() {
        const { idData, geoAlphData, pointsTotal, letterID, prevLetter,wrongLetter1,wrongLetter2,randomNum,toBeGone,rightLetter,gameOver } = this.state
        if (letterID === null) {
            return (<div className='guess-container'>
                <div className='guess-title'>
                    Загрузка
                </div>
            </div>)
        }
        if (gameOver) {
            return (<div className='guess-container'>
                <div className='guess-title end-title'>
                    Очков набрано: {pointsTotal} 
                </div>
                <div className='guess-title newGame' onClick={this.newGame}>
                      Новая игра!
                </div>
                
            </div>)
        }
        const varRight = geoAlphData[idData[letterID]]
        const varRightClone = (prevLetter === null) ? undefined : prevLetter.geoSym
        

        return (
            <div className='guess-container'>
                <div className='guess-title'>
                    <div>Очков: {pointsTotal}</div>
                    <div>{33 - idData.length} / 33</div>
                </div>
                <div className='currentLetter-container'>
                <span  className='currentLetter' key={5*randomNum} >{varRight.geoSym}</span>
                <span className='currentLetter currentLetter_clone' key={4*randomNum}>{varRightClone}</span>
                </div>
                <div className='variants-container'>


                    <LetterCard key={1*randomNum} order={"10"} answer={this.wrongAnsw} isRight={false}  letter={wrongLetter1}  toBeGone={toBeGone}/>

                    <LetterCard key={2*randomNum} order={"20"} answer={this.wrongAnsw} isRight={false}  letter={wrongLetter2}  toBeGone={toBeGone}/>

                    <LetterCard key={3*randomNum}   order={Math.round( randomNum*30).toString() } answer={this.rightAnsw} isRight={true}  letter={rightLetter}  toBeGone={toBeGone} />

                </div>
            </div>
        )
    }
}
