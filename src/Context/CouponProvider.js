import { useContext, createContext, useState, useCallback } from 'react';

const CouponContext = createContext();

const CouponProvider = ({ children }) => {
    const [coupon, setCoupon] = useState({});

    const toggleCoupon = useCallback((rowID, ocgID, ocID) => {
        const ocData = rowID.OCG[ocgID].OC[ocID];
        if(ocData === null) return;
		setCoupon(prevCoupon => {
            const newCoupon = { ...prevCoupon };
            const { ID } = ocData;
            const hasBet = newCoupon[rowID.NID];
            if (hasBet && hasBet.V.ID === ID) {
                delete newCoupon[rowID.NID];
                return newCoupon
            } 
            const { C, N, OCG } = rowID;
            
            const { MBS } = OCG[1];

            newCoupon[rowID.NID] = {
                N,
                C,
                MBS,
                V: ocData
            };
            return newCoupon
		})
    },[setCoupon])

	return (
		<CouponContext.Provider value={{
            coupon,
            setCoupon,
            toggleCoupon
        }}>
				{ children }
		</CouponContext.Provider>
	)
}
	
export default CouponProvider

export function useCoupon() {
	const context = useContext(CouponContext);
	return {
		...context
	};
}