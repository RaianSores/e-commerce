import Head from 'next/head';
import styles from "../styles/Home.module.scss";

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Maydson Store | Dashboard</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div>
                        <h1>Dashboard</h1>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;