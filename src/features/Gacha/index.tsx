import { useEffect, useRef, useState } from 'react'
import InfoSvg from '@/assets/info'
import GachaShadowSvg from '@/assets/gachaShadow'
import TicketSvg from '@/assets/ticket'
import Button from '@/components/common/Button'
import { Gacha1, Gacha2, Gacha3, Gacha4, Gacha5, Gacha6, Gacha7 } from '@/assets'
import bonusImg from '@/assets/bonus.png'
import Gift1 from '@/assets/1.png'
import Gift2 from '@/assets/2.png'
import Gift3 from '@/assets/3.png'
import Gift4 from '@/assets/4.png'
import Gift5 from '@/assets/5.png'
import * as S from './style.css'

const GachaImgs = [<Gacha1 />, <Gacha2 />, <Gacha3 />, <Gacha4 />, <Gacha5 />, <Gacha6 />, <Gacha7 />]
const GachaHistory = [
  { id: 1, name: '빼빼로', brand: '이마트24', image: Gift1 },
  { id: 2, name: '치킨', brand: 'BHC', image: Gift2 },
  { id: 3, name: '파인트 아이스크림', brand: '배스킨라빈스', image: Gift3 },
  { id: 4, name: '꽝', brand: '꽝', image: Gift4 },
  { id: 5, name: '에어팟', brand: 'apple', image: Gift5 },
]

export default function Gacha() {
  const gachaTicket = localStorage.getItem('gachaTicket')
  const [gachaIndex, setGachaIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [remainingDays, setRemainingDays] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchBirthday = async () => {
      try {
        const rawBaseUrl = import.meta.env.VITE_BASE_URL ?? '';
        const baseUrl = rawBaseUrl.replace(/\/$/, '');
        const response = await fetch(`${baseUrl}/birthday/`, {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        });

        if (!response.ok) {
          if (response.status === 400) {
            if (isMounted) setRemainingDays(null);
            return;
          }
          throw new Error('Failed to load birthday info');
        }

        const data = await response.json();
        if (isMounted) {
          setRemainingDays(Number(data?.remainingDays));
        }
      } catch (error) {
        if (isMounted) setRemainingDays(null);
      }
    };

    fetchBirthday();

    return () => {
      isMounted = false;
    };
  }, []);

  const onExcuseGacha = () => {
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
  };

  return (
    <div className={S.container}>
      <div className={S.InfoBtnLayout}>
        <div className={S.InfoBtnGroup}>
          <button className={`${S.InfoBtn} ${S.InfoTextBtn}`} onClick={() => setIsHistoryOpen(true)}>
            뽑기 내역
          </button>
          <button className={S.InfoBtn} onClick={() => setIsGuideOpen(true)}>
            <InfoSvg />
            안내
          </button>
        </div>
      </div>

      <div className={S.DDayBtnLayout}>
        <button className={S.DDayBtn}>
          {remainingDays === null ? '생일 미등록' : `생일 D-${remainingDays}`}
        </button>
      </div>

      <div className={S.GachaImgLayout}>
        <img
          src={bonusImg}
          alt="보너스 기회"
          className={S.BonusFloat}
        />
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
            <p className={S.ticketRemainValue}>{gachaTicket}개</p>
          </div>
        </div>

        <div className={S.gachaPresentLayout}>
          <Button onClick={onExcuseGacha} disabled={isAnimating || gachaTicket == '0'}>
            {isAnimating ? '뽑는 중...' : '선물 뽑기'}
          </Button>
          <Button kind='light'>공유하고 기회 더 얻기</Button>
        </div>
      </footer>

      {isGuideOpen && (
        <div className={S.GuideOverlay} onClick={() => setIsGuideOpen(false)}>
          <div className={S.GuideSheet} onClick={(event) => event.stopPropagation()}>
            <div className={S.GuideHandle} />
            <div className={S.GuideContent}>
              <h2 className={S.GuideTitle}>경품 뽑기 및 확정 안내</h2>
              <ul className={S.GuideList}>
                <li className={S.GuideItem}>
                  본 이벤트는 생일 D-Day까지 무제한으로 참여할 수 있는 '경품 확정형' 게임입니다.
                </li>
                <li className={S.GuideItem}>
                  다시 뽑기를 진행할 경우, 이전에 획득했던 상품은 즉시 소멸되며 새로운 결과로 대체됩니다. (이전 상품으로 복구 불가)
                </li>
                <li className={S.GuideItem}>
                  생일 당일(D-Day) 00시 기준, 최종적으로 화면에 표시된 '현재 경품'이 당첨 상품으로 확정됩니다.
                </li>
              </ul>

              <h3 className={S.GuideSectionTitle}>기회 획득 방법</h3>
              <ul className={S.GuideList}>
                <li className={S.GuideItem}>
                  매일 기본 제공되는 뽑기권 외에, 광고 시청 또는 친구 공유를 통해 추가 뽑기 기회를 얻을 수 있습니다.
                </li>
              </ul>

              <h3 className={S.GuideSectionTitle}>경품 지급 및 수령</h3>
              <ul className={S.GuideList}>
                <li className={S.GuideItem}>
                  최종 확정된 경품은 생일 당일 가입된 계정 정보를 통해 지급 안내가 발송됩니다.
                </li>
                <li className={S.GuideItem}>
                  꽝이 나온 상태로 생일이 될 경우, 수령 가능한 경품이 없습니다.
                </li>
                <li className={S.GuideItem}>
                  실물 경품의 경우, 제세공과금(22%)은 당첨자 본인 부담이며 수령 거부 시 당첨이 취소될 수 있습니다.
                </li>
              </ul>

              <h3 className={S.GuideSectionTitle}>기타 주의사항</h3>
              <ul className={S.GuideList}>
                <li className={S.GuideItem}>
                  부정한 방법(매크로, 도용, 앱 변조 등)으로 참여할 경우 당첨이 취소되며 서비스 이용이 제한될 수 있습니다.
                </li>
                <li className={S.GuideItem}>
                  본 이벤트는 내부 사정에 따라 사전 공지 없이 변경되거나 조기 종료될 수 있습니다.
                </li>
              </ul>
            </div>

            <div className={S.GuideButtonArea}>
              <Button onClick={() => setIsGuideOpen(false)}>확인했어요</Button>
            </div>
          </div>
        </div>
      )}

      {isHistoryOpen && (
        <div className={S.GuideOverlay} onClick={() => setIsHistoryOpen(false)}>
          <div className={S.HistorySheet} onClick={(event) => event.stopPropagation()}>
            <div className={S.HistoryHeader}>
              <button className={S.BackButton} onClick={() => setIsHistoryOpen(false)}>
                <span className={S.BackIcon} />
              </button>
              <h2 className={S.HistoryTitle}>뽑기 내역</h2>
              <div className={S.HistoryHeaderSpacer} />
            </div>
            <div className={S.HistoryList}>
              {GachaHistory.map((gift) => (
                <div className={S.HistoryItem} key={gift.id}>
                  <img className={S.HistoryImage} src={gift.image} alt={gift.name} />
                  <div className={S.HistoryText}>
                    <p className={S.HistoryName}>{gift.name}</p>
                    <p className={S.HistoryBrand}>{gift.brand}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
