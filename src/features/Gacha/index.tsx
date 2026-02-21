import { useRef, useState } from 'react'
import InfoSvg from '@/assets/info'
import GachaShadowSvg from '@/assets/gachaShadow'
import TicketSvg from '@/assets/ticket'
import Button from '@/components/common/Button'
import { AirpodImg, Gacha1, Gacha2, Gacha3, Gacha4, Gacha5, Gacha6, Gacha7 } from '@/assets'
import * as S from './style.css'
import axios from 'axios'

declare global {
  interface Window {
    webkit?: {
      messageHandlers?: {
        kakaoShare?: {
          postMessage: (data: unknown) => void
        }
      }
    }
  }
}

const GachaImgs = [<Gacha1 />, <Gacha2 />, <Gacha3 />, <Gacha4 />, <Gacha5 />, <Gacha6 />, <Gacha7 />]

export default function Gacha() {
  const gachaTicket = localStorage.getItem('gachaTicket')
  const [gachaIndex, setGachaIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [gift, setGift] = useState({
    id: '',
    brand: '',
    name: '',
  })
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onExcuseGacha = async () => {
    if (isAnimating) return;
  
    setIsAnimating(true);
    let current = 1;

    localStorage.setItem('gachaTicket', (Number(gachaTicket) - 1).toString());
  
    timerRef.current = setInterval(() => {
      if (current < GachaImgs.length) {
        setGachaIndex(current);
        current++;
      } else {
        if (timerRef.current) clearInterval(timerRef.current!);
        setGachaIndex(0);
        setIsAnimating(false);
      }
    }, 150);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/gifts/draw`)
      if (data.gift.brand === "꽝") {
        return;
      } else {
        setGift({
          id: data.gift.id,
          brand: data.gift.brand,
          name: data.gift.name
        })
        setShowGift(true)
      }
      console.log(data.gift)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className={S.container}>
      <div className={S.InfoBtnLayout}>
        <button className={S.InfoBtn}>
          <InfoSvg />
          안내
        </button>
      </div>

      <div className={S.DDayBtnLayout}>
        <button className={S.DDayBtn}>생일 D-13</button>
      </div>

      {showGift ? (
        <div className={S.GiftLayout}>
          <div className={S.GiftBox}>
            <p className={S.CurrentGift}>현재 경품</p>
            <img className={S.GiftImg} src={AirpodImg}  />
            <div className={S.GiftInfoLayout}>
              <p className={S.BrandName}>{gift.brand}</p>
              <p className={S.GiftName}>{gift.name}</p>
            </div>
          </div>
          <p className={S.noticeText}>*생일날까지 기다리면 경품을 받을 수 있어요.</p>
        </div>
      ) : (
        <div className={S.GachaImgLayout}>
          <div className={S.GachaImgBox}>
            {GachaImgs[gachaIndex]}
          </div>
          <div className={S.GachaShadowBox}>
            <GachaShadowSvg />
          </div>
        </div>
      )}

      <footer className={S.FooterLayout}>
        <div className={S.ticketLayout}>
          <TicketSvg />
          <div className={S.ticketTextLayout}>
            <p className={S.ticketRemainText}>남은 뽑기권</p>
            <p className={S.ticketRemainValue}>{gachaTicket}개</p>
          </div>
        </div>

        <div className={S.gachaPresentLayout}>
          <Button onClick={onExcuseGacha} disabled={isAnimating || gachaTicket == '0'}>
            {isAnimating ? '뽑는 중...' : '선물 뽑기'}
          </Button>
          <Button 
            kind='light' 
            onClick={() => window.webkit?.messageHandlers?.kakaoShare?.postMessage({})}
            >
              공유하고 기회 더 얻기
          </Button>
        </div>
      </footer>
    </div>
  )
}