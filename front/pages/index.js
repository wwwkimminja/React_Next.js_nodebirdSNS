import AppLayout from "../components/AppLayout";
import Head from 'next/head';


const Home =()=>{
return(
    <AppLayout>
       <Head>
            <title>Home |NodeBird</title>
        </Head>
        <div>Hello,Next!</div>
   
    </AppLayout>
)
}

export default Home;