import React from 'react'
import item1 from '../../../../images/discover/hotbid/01.png'
import item2 from '../../../../images/discover/hotbid/productimg-1.png'
import item3 from '../../../../images/discover/hotbid/product img-2.png'
import pricon from '../../../../images/discover/hotbid/pr.svg'

const HotbidCards = () => {
  return (
    <div className="hotbid__cards disflex">
    <div className="hotbid__cards card">
        <div className="card_img">
            <img src={item1} alt="" />
            <button className='place-a-bid-btn'>Place a bid <img src={pricon} alt="" /></button>
        </div>
        <div className="hotbid__cards_description disflex acenter">
            <p className='poppins f500 cht2'>Amazing digital art</p>
            <p className='greennum'>0.27 ETH</p>
        </div>
        <div className="hotbid__cards_people disflex">
            <div className="people-row disflex acenter">
                <div className="acc-ava f"></div>
                <div className="acc-ava s"></div>
                <div className="acc-ava t"></div>
            </div>
            <p className='poppins f500'>3 in stock</p>
        </div>
        <div className="hotbid__cards_record disflex acenter">
            <div className='disflex acenter'>
                <img height='20px' src={pricon} alt="" />
                <p className='poppins f400 likegray'>Highest bid</p>
                <b className='poppins f600 cht2'>0.001 ETH</b>
            </div>
            <p className='likegray poppins f400'>New bid 🔥</p>
        </div>
    </div>
    <div className="hotbid__cards card">
        <div className="card_img">
            <img src={item2} alt="" />
            <button className='place-a-bid-btn'>Place a bid <img src={pricon} alt="" /></button>
        </div>
        <div className="hotbid__cards_description disflex acenter">
            <p className='poppins f500 cht2'>Amazing digital art</p>
            <p className='greennum'>0.27 ETH</p>
        </div>
        <div className="hotbid__cards_people disflex">
            <div className="people-row disflex acenter">
                <div className="acc-ava f"></div>
                <div className="acc-ava s"></div>
                <div className="acc-ava t"></div>
            </div>
            <p className='poppins f500'>3 in stock</p>
        </div>
        <div className="hotbid__cards_record disflex acenter">
            <div className='disflex acenter'>
                <img height='20px' src={pricon} alt="" />
                <p className='poppins f400 likegray'>Highest bid</p>
                <b className='poppins f600 cht2'>0.001 ETH</b>
            </div>
            <p className='likegray poppins f400'>New bid 🔥</p>
        </div>
    </div>
    <div className="hotbid__cards card">
        <div className="card_img">
            <img src={item3} alt="" />
            <button className='place-a-bid-btn'>Place a bid <img src={pricon} alt="" /></button>
        </div>
        <div className="hotbid__cards_description disflex acenter">
            <p className='poppins f500 cht2'>Amazing digital art</p>
            <p className='greennum'>0.27 ETH</p>
        </div>
        <div className="hotbid__cards_people disflex">
            <div className="people-row disflex acenter">
                <div className="acc-ava f"></div>
                <div className="acc-ava s"></div>
                <div className="acc-ava t"></div>
            </div>
            <p className='poppins f500'>3 in stock</p>
        </div>
        <div className="hotbid__cards_record disflex acenter">
            <div className='disflex acenter'>
                <img height='20px' src={pricon} alt="" />
                <p className='poppins f400 likegray'>Highest bid</p>
                <b className='poppins f600 cht2'>0.001 ETH</b>
            </div>
            <p className='likegray poppins f400'>New bid 🔥</p>
        </div>
    </div>
    <div className="hotbid__cards card last">
        <div className="card_img">
            <img src={item2} alt="" />
            <button className='place-a-bid-btn'>Place a bid <img src={pricon} alt="" /></button>
        </div>
        <div className="hotbid__cards_description disflex acenter">
            <p className='poppins f500 cht2'>Amazing digital art</p>
            <p className='greennum'>0.27 ETH</p>
        </div>
        <div className="hotbid__cards_people disflex">
            <div className="people-row disflex acenter">
                <div className="acc-ava f"></div>
                <div className="acc-ava s"></div>
                <div className="acc-ava t"></div>
            </div>
            <p className='poppins f500'>3 in stock</p>
        </div>
        <div className="hotbid__cards_record disflex acenter">
            <div className='disflex acenter'>
                <img height='20px' src={pricon} alt="" />
                <p className='poppins f400 likegray'>Highest bid</p>
                <b className='poppins f600 cht2'>0.001 ETH</b>
            </div>
            <p className='likegray poppins f400'>New bid 🔥</p>
        </div>
    </div>
</div>
  )
}

export default HotbidCards