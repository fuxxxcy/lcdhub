import { Header } from "@components";
import DePayWidgets from "@depay/widgets";
import UserContext from "@utils/context/UserContext";
import { useContext, useState } from "react";
import styled from "styled-components";

const BodyContent = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 100%;
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  z-index: 1;
  backdrop-filter: blur(180px);
`;

export default function FillBalancePage() {
  const [total, setTotal] = useState<number>()
  const { user } = useContext(UserContext);

  const onPay = () => {
    DePayWidgets.Payment({
      integration: 'cceda3b5-8e9f-4431-b96b-87a09fdf02d6',
      accept:[
        {
          blockchain: 'solana',
          amount: total,
          token: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
          receiver: 'A8eiWtPjzcAAiBbLDAnpmffHJNPqRsXDJ9cnAt6dX8QC'
        }, 
        //   {
        //     blockchain: 'ethereum',
        //     amount: total,
        //     token: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        //     receiver: '0x9D46c92b218044D4ab3356c6F61fE49B4F79F9A3'
        //   }, 
        //   {
        //     blockchain: 'bsc',
        //     amount: total,
        //     token: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
        //     receiver: '0x9D46c92b218044D4ab3356c6F61fE49B4F79F9A3'
        //   }
        ],
        succeeded: (transaction)=> {
          // Вызывается когда транзакция успешна (подтверждена блокчейном)
          console.log(transaction)
          
            // ----- тут нужно добавить к полю wallet значение total -----

          setTotal(0)
        }
      })
      .catch((error: any) => {
        // Обрабатываем ошибку, если не удалось получить данные
        console.error('Ошибка при получении данных:', error);
      });
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header/>
        <BodyContent>
            <input type="text" placeholder="Введите сумму..." value={total} onChange={(e) => setTotal(Number.parseInt(e.target.value))}/>
            <button onClick={onPay}>Пополнить</button>
        </BodyContent>
    </div>
  );
};

