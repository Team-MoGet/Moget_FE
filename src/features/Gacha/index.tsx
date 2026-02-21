import { useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import axios from 'axios'
import InfoSvg from '@/assets/info'
import GachaShadowSvg from '@/assets/gachaShadow'
import TicketSvg from '@/assets/ticket'
import Button from '@/components/common/Button'
import { 
  AirpodImg, 
  ChickenImg,
  IceCreamImg,
  PeperoImg,
  Gacha1, 
  Gacha2, 
  Gacha3, 
  Gacha4, 
  Gacha5, 
  Gacha6, 
  Gacha7,
} from '@/assets'
import * as S from './style.css'

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
const GiftImgs = [PeperoImg, ChickenImg, IceCreamImg, undefined, AirpodImg]

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

  const fireConfetti = () => {
    const duration = 0.5 * 1000;
    const end = Date.now() + duration;

    const gachaColors = [
      '#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee',
      '#FFD700', '#FF69B4', '#00CED1', '#9370DB', '#FF4500', '#ADFF2F', '#F0E68C'
    ];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: gachaColors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: gachaColors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const onExcuseGacha = async () => {
    if (isAnimating) return;
  
    setIsAnimating(true);
    let current = 1;

    localStorage.setItem('gachaTicket', (Number(gachaTicket) - 1).toString());
  
    const fetchGiftData = async () => {
      try {
        const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/gifts/draw`)
        return data.gift;
      } catch (err) {
        console.error(err);
        return { brand: "꽝" };
      }
    };

    const giftPromise = fetchGiftData();

    timerRef.current = setInterval(async () => {
      if (current < GachaImgs.length) {
        setGachaIndex(current);
        current++;
      } else {
        if (timerRef.current) clearInterval(timerRef.current!);
        
        const resultGift = await giftPromise;

        if (resultGift && resultGift.brand !== "꽝") {
          fireConfetti();
          setGift({
            id: resultGift.id,
            brand: resultGift.brand,
            name: resultGift.name
          });
          setShowGift(true);
        } else {
          setGachaIndex(0);
        }
        setIsAnimating(false);
      }
    }, 150);
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
            <img
              className={S.GiftImg}
              src={GiftImgs[Number(gift.id)-1]}
              alt={gift.name}
            />
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
          <Button onClick={onExcuseGacha} disabled={isAnimating || gachaTicket === '0'}>
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