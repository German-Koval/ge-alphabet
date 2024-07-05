import React from "react";
import ReactDOM from 'react-dom/client';
import './table.css'

export default class Table extends React.Component {

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
    }
render() {
    const {geoAlphData} = this.state
    const  time = geoAlphData.map((item) =>{
        const key = Math.random()
         return(<div className='row' key={key}>
            <div className='geoSym line-element'>{item.geoSym}</div>
            <div className='rusSym line-element'>{item.rusSym}</div>
            <div className='pronun line-element'>{item.pronun}</div>
            <div className='engSym line-element'>{item.engSym}</div>
         </div>)
     });
    return(
        <div className="table">
           {time} 
        </div>
    )
}
}
