
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import './footer.css'

const SampleFooter = () => ( 
  
  <Footer  className='footer'
  onClick
  autoFocus
  columns={[
    {
      title: 'CONTACT US:',
      items: [
        {
          title: 'address: 21 Jump Street, Moon, Space',
          url: 'https://ceo/',
          openExternal: true,
        },
        {
          title: 'email: shoppersshenanigans@gmail.coms',
          url: 'https://ceo/',
          openExternal: true,
        },
        {
          title: 'phone: +1 9879877007',
          url: 'https://ceo/',
          openExternal: true,
        },
      ],
    },
    {
      icon: (
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
          alt="more products"
        />
      ),
      title: 'more info',
      items: [
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
              alt="yuque"
            />
          ),
          title: 'cse5234',
          url: 'https://com',
          description: 'cse5234',
          openExternal: true,
        },
        {
          icon: (
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
              alt="yuque"
            />
          ),
          title: 'cse5234',
          url: 'https://com',
          description: 'cse5234',
          openExternal: true,
        },
      ],
    },
  ]}
/>

);


export default () => <SampleFooter />;