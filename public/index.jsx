import { gsap } from 'gsap'
import Button from '../Button'
import style from './index.module.css'

const data = [
  {
    title: 'SPARQ A.I.',
    text: 'Interact directly with your car with Personalized Insights & Service Reminders that analysis from your past, present, and future data. Learns from your driving behavior, car specifications, and driving environment.'
  },
  {
    title: 'A.I. Powered Health Scoring System',
    text: 'Effortless installation, unparalleled intelligence. Simply plug into your car\'s OBD II port to activate SPARQ Diagnostics\'expertise seamlessly. Sparq diagnostics is compatible with most vehicles manufactured after 2010 by major car brands.'
  },
  {
    title: 'On-Demand Diagnostics',
    text: 'Remotely perform Real Time Diagnostics with the ability to detect +50K inspections on your car. Supports both Generic & Manufacturer Specific (OEM) codes'
  },
  {
    title: 'Individualized Car Component Health Status',
    text: 'A summary of the overall health status of major components of the your car. Providing deeper insights into different vehicle systems inside your car.'
  },
  {
    title: 'Vehicle Data Transfer',
    text: 'Transfer existing information about your vehicle from the SPARQ Ecosystem when you sell, transfer, or purchase a new car.'
  },
]

const Details = () => {

  const handleChange = (index) => {
    const divElems = gsap.utils.toArray(`.${style.list} div`)
    const svgElems = gsap.utils.toArray(`.${style.list} svg`)

    const isClose = gsap.getProperty(divElems[index], 'height') === 0

    gsap.to(divElems, {
      height: '0',
      ease: 'power2.in'
    })
    gsap.to(svgElems, {
      transform: 'rotate(0)'
    })

    if (isClose) {
      gsap.to(divElems[index], {
        height: 'auto',
        ease: 'power2.in'
      })
      gsap.to(svgElems[index], {
        transform: 'rotate(45deg)'
      })
    }
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.side}>
          <img src="/devices.png" alt="" />
          <Button block>Order SPARQ Diagnostics</Button>
        </div>
        <div className={style.content}>
          <h2>Features</h2>
          <ul className={style.list}>
            {data.map((item, index) => (
              <li key={index} onClick={() => handleChange(index)}>
                <h3>{item.title}</h3>
                <div>
                  <p>{item.text}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" role="img" width="16" height="16"><path d="M7.99805 16L7.99805 0" stroke="#030303" strokeWidth="1.5" strokeMiterlimit="10"></path><path d="M0 7.99805L16 7.99805" stroke="#030303" strokeWidth="1.5" strokeMiterlimit="10"></path></svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Details