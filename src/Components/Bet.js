import Cell from "./Cell"
import { useCoupon } from '../Context/CouponProvider';

function Bet({ data, onSelect, selected = null }) {
    const { coupon, toggleCoupon } = useCoupon();

    return (
        <div className="bet-container">
            <div className="bet-header">
                <Cell>{`${data.D} ${data.DAY} ${data.LN}`}</Cell>
                <Cell>Yorumlar</Cell>
                <Cell />
                <Cell>1</Cell>
                <Cell>x</Cell>
                <Cell>2</Cell>
                <Cell>Alt</Cell>
                <Cell>Üst</Cell>
                <Cell>H1</Cell>
                <Cell>1</Cell>
                <Cell>x</Cell>
                <Cell>2</Cell>
                <Cell>H2</Cell>
                <Cell>1-X</Cell>
                <Cell>1-2</Cell>
                <Cell>2-X</Cell>
                <Cell>Var</Cell>
                <Cell>Yok</Cell>
                <Cell>+99</Cell>
            </div>
            <div className="bet-row">
                <Cell><strong>{data.C}</strong>{` ${data.T} ${data.N}`}</Cell>
                <Cell>Yorumlar</Cell>
                <Cell>{ data.OCG[1].MBS }</Cell>
                <Cell onClick={() => toggleCoupon(data, 1, 0)} selected={(coupon[data.NID] && coupon[data.NID].V.ID === data.OCG[1].OC[0]?.ID) ?? false}>{ data.OCG[1].OC[0]?.O }</Cell>
                <Cell onClick={() => toggleCoupon(data, 1, 1)} selected={(coupon[data.NID] && coupon[data.NID].V.ID === data.OCG[1].OC[1]?.ID) ?? false}>{ data.OCG[1].OC[1]?.O }</Cell>
                <Cell onClick={() => toggleCoupon(data, 1, 2)} selected={(coupon[data.NID] && coupon[data.NID].V.ID === data.OCG[1].OC[2]?.ID) ?? false}>{ data.OCG[1].OC[2]?.O }</Cell>
                <Cell onClick={() => toggleCoupon(data, 5, 25)} selected={(coupon[data.NID] && coupon[data.NID].V.ID === data.OCG[5].OC[25]?.ID) ?? false}>{ data.OCG[5].OC[25]?.O }</Cell>
                <Cell onClick={() => toggleCoupon(data, 5, 26)} selected={(coupon[data.NID] && coupon[data.NID].V.ID === data.OCG[5].OC[26]?.ID) ?? false}>{ data.OCG[5].OC[26]?.O }</Cell>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell />
                <Cell onClick={() => toggleCoupon(data, 2, 3)} selected={(coupon[data.NID] && coupon[data.NID].V.ID === data.OCG[2].OC[3]?.ID) ?? false}>{ data.OCG[2].OC[3]?.O }</Cell>
                <Cell onClick={() => toggleCoupon(data, 2, 4)} selected={(coupon[data.NID] && coupon[data.NID].V.ID === data.OCG[2].OC[4]?.ID) ?? false}>{ data.OCG[2].OC[4]?.O }</Cell>
                <Cell onClick={() => toggleCoupon(data, 2, 5)} selected={(coupon[data.NID] && coupon[data.NID].V.ID === data.OCG[2].OC[5]?.ID) ?? false}>{ data.OCG[2].OC[5]?.O }</Cell>
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>

    )
}

export default Bet