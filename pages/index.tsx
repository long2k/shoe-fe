import React, {useRef, useEffect} from 'react'
import Image from 'next/image'
import Shoe from '../styles/images/shoes1.jpg'
import styles from '../styles/components/mainpage.module.css'

export default function Home() {
  const data = [
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },

    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    },
    {
      url: Shoe,
      name: 'Dép PU Nam DPM032044DEN (Đen)',
      price: '344,000 '
    }
  ]
  const selectedShoe = useRef<HTMLDivElement>()
  useEffect(()=>{
    if (selectedShoe.current) {
      console.log(`forwardRefRef div width: ${selectedShoe.current.clientWidth}`);
    }
  }, [])
  return (
    <div className={styles.base}>
      <div className={styles.container}>
        {
          data?.map((item, idx) =>
            <div className={styles.gridItem} data-id={idx} ref={selectedShoe} >
              <Image
                src={Shoe}
                alt="Picture of the author"
                width={200}
                height={300}
              />
              <div>
                <p>{item.name}</p>
                <p className={styles.colorPrice}>{item.price}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
