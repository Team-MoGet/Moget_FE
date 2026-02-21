import Button from '@/components/common/Button';
import airpodsImg from '@/assets/5.png';
import * as S from './style.css';

interface BirthdayClaimProps {
  /** 수령 가능한 경품명 (예: API에서 내려주는 값) */
  giftName?: string;
  /** 경품 상세 설명 */
  giftDescription?: string;
  /** 경품 받기 클릭 핸들러 */
  onClaim?: () => void;
}

const DEFAULT_GIFT_NAME = 'Apple AirPods Pro 2세대';
const DEFAULT_GIFT_DESCRIPTION = '생일 D-Day 축하 경품으로 지급됩니다.';

export default function BirthdayClaim({
  giftName = DEFAULT_GIFT_NAME,
  giftDescription = DEFAULT_GIFT_DESCRIPTION,
  onClaim,
}: BirthdayClaimProps) {
  const handleClaim = () => {
    onClaim?.();
  };

  return (
    <div className={S.container}>
      <main className={S.content}>
        <div className={S.headline}>
          <h1 className={S.title}>생일 축하해요!</h1>
          <p className={S.subtitle}>오늘의 경품을 받아가세요</p>
        </div>

        <section className={S.giftCard}>
          <img
            src={airpodsImg}
            alt="에어팟 프로"
            className={S.giftImage}
          />
          <span className={S.giftLabel}>당첨 경품</span>
          <p className={S.giftName}>{giftName}</p>
          <p className={S.giftDescription}>{giftDescription}</p>
        </section>
      </main>

      <footer className={S.footerLayout}>
        <div className={S.claimButtonLayout}>
          <Button onClick={handleClaim}>경품 받기</Button>
          <Button kind="light" onClick={() => window.history.back()}>
            나중에 받기
          </Button>
        </div>
      </footer>
    </div>
  );
}
