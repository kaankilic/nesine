import { useCoupon } from "../Context/CouponProvider"

function CouponCard({ children, onClick, value, selected = false }) {
    const { coupon } = useCoupon();
    const couponData = Object.values(coupon);
    const oddData = couponData.map(o => o.V.O).reduce( (a, b) => a * b , 1)*2;
    
    console.log("coupon render");
    return (
        <div className="coupon-container">
            <div className="coupon-bets">
                { couponData.map((bet) => (
                    <div key={`game-${bet.C}`}>
                        {bet.MBS} Kod: {bet.C} Maç:{bet.N} <strong>Oran:</strong> {bet.V.O}
                    </div>
                )) }
            </div>
            <div className="coupon-footer">
                Toplam Tutar: {couponData.length === 0 ? 0 : oddData.toFixed(2)}TL
            </div>
        </div>
    )
}

export default CouponCard