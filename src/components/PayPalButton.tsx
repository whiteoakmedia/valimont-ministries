"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface PayPalButtonProps {
  price: string;
}

export default function PayPalButton({ price }: PayPalButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sdkReady, setSdkReady] = useState(false);
  const buttonsRendered = useRef(false);

  useEffect(() => {
    if (!sdkReady || buttonsRendered.current) return;
    if (!containerRef.current) return;

    // Parse the price string to extract a numeric value
    const numericPrice = price.replace(/[^0-9.]/g, "");
    if (!numericPrice || isNaN(parseFloat(numericPrice))) return;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const paypal = (window as any).paypal;
      if (!paypal) return;

      paypal
        .Buttons({
          createOrder: (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            _data: any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            actions: any
          ) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: numericPrice,
                  },
                },
              ],
            });
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onApprove: (_data: any, actions: any) => {
            return actions.order.capture().then((details: { payer: { name: { given_name: string } } }) => {
              alert(
                `Transaction completed by ${details.payer.name.given_name}. Thank you for your purchase!`
              );
            });
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onError: (err: any) => {
            console.error("PayPal Buttons error:", err);
          },
        })
        .render(containerRef.current);

      buttonsRendered.current = true;
    } catch (error) {
      console.error("Failed to render PayPal buttons:", error);
    }
  }, [sdkReady, price]);

  // If the price is not a purchasable amount, show a message instead
  const numericPrice = price.replace(/[^0-9.]/g, "");
  const isPurchasable = numericPrice && !isNaN(parseFloat(numericPrice)) && parseFloat(numericPrice) > 0;

  if (!isPurchasable) {
    return (
      <div className="mt-8 rounded-lg border border-sage-dark bg-sage/50 px-6 py-5 text-center">
        <p className="font-sans text-lg font-semibold text-forest">
          {price}
        </p>
        <p className="mt-1 font-sans text-sm text-charcoal/60">
          Contact us for purchasing details.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <Script
        src="https://www.paypal.com/sdk/js?client-id=AcSzLqUx-IUo3JdTgXlcQa4-nF1kO5NUOrE6dPaQqyjTYnueGd5_Z7FQKo6InZoHb8BYLNjC5Ehkau03&currency=USD"
        strategy="lazyOnload"
        onReady={() => setSdkReady(true)}
      />
      <div
        ref={containerRef}
        id="paypal-button-container"
        className="min-h-[150px]"
      />
    </div>
  );
}
