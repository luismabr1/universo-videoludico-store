/* import { Badge } from "@medusajs/ui"

const PaymentManual = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Click:</span> Para desplegar informacaion
      only.
    </Badge>
  )
}

export default PaymentManual */

import { useState } from 'react';
import { Badge } from "@medusajs/ui";

const PaymentManual = ({ className }: { className?: string }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleButtonClick = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <Badge color="orange" className={className} onClick={handleButtonClick}>
      <span className="font-semibold">Click:</span> Para desplegar información
      {isInfoVisible && (
        <div className="mt-2">
          {/* Aquí va la información de pago que deseas mostrar */}
          <p>Nombre del banco: Banesco</p>
          <p>Número de cuenta: 111111111111111</p>
          {/* ... más información */}
        </div>
      )}
    </Badge>
  );
};

export default PaymentManual;
