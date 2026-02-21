import { useNavigate } from "react-router-dom";
import BirthdayClaim from "@/features/BirthdayClaim";

export default function BirthdayClaimPage() {
  const navigate = useNavigate();

  return (
    <BirthdayClaim
      onClaim={() => {
        // TODO: API 연동 후 수령 처리
        navigate('/gacha');
      }}
    />
  );
}
