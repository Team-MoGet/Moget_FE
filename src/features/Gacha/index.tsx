import { useRef, useState } from 'react'
import InfoSvg from '@/assets/info'
import GachaShadowSvg from '@/assets/gachaShadow'
import TicketSvg from '@/assets/ticket'
import Button from '@/components/common/Button'
import { Gacha1, Gacha2, Gacha3, Gacha4, Gacha5, Gacha6, Gacha7 } from '@/assets'
import * as S from './style.css'

const GachaImgs = [<Gacha1 />, <Gacha2 />, <Gacha3 />, <Gacha4 />, <Gacha5 />, <Gacha6 />, <Gacha7 />]

export default function Gacha() {
  const [gachaIndex, setGachaIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onExcuseGacha = () => {
    if (isAnimating) return;
  
    setIsAnimating(true);
    let current = 1;

    const ticket = localStorage.getItem('gachaTicket');
    localStorage.setItem('gachaTicket', (Number(ticket) - 1).toString());
  
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

      <div className={S.GachaImgLayout}>
        <div className={S.GachaImgBox}>
          {GachaImgs[gachaIndex]}
        </div>
        <div className={S.GachaShadowBox}>
          <GachaShadowSvg />
        </div>
      </div>

      <footer className={S.FooterLayout}>
        <div className={S.ticketLayout}>
          <TicketSvg />
          <div className={S.ticketTextLayout}>
            <p className={S.ticketRemainText}>남은 뽑기권</p>
            <p className={S.ticketRemainValue}>3개</p>
          </div>
        </div>

        <div className={S.gachaPresentLayout}>
          <Button onClick={onExcuseGacha} disabled={isAnimating}>
            {isAnimating ? '뽑는 중...' : '선물 뽑기'}
          </Button>
          <Button kind='light'>공유하고 기회 더 얻기</Button>
        </div>
      </footer>
    </div>
  )
}