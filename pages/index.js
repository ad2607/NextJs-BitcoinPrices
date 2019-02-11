import Fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
    <div>    
        <h1>Hello Next.js</h1>
        <p> Check the current bitcoin rate</p>
        <Prices bpi={props.bpi}/>
    </div>
    </Layout>
);  

Index.getInitialProps = async function(){
    const res = await Fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const res1 = await Fetch('https://api.coindesk.com/v1/bpi/historical/close.json');
    const data = await res.json();
    const data1 = await res1.json();


    return{
        bpi: data.bpi,
        bpi: data1.bpi
    };

}


export default Index;