'use client';

import AddnewPaymentMethod from '@/components/settings/form/add-new-payment-method';
import PaymentsPayouts from '@/components/settings/payment-payouts/payments-payouts';

export default function PaymentPayoutsBlock() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:gap-12 mx-96 mb-60">
      <PaymentsPayouts />
      <AddnewPaymentMethod />
    </div>
  );
}
