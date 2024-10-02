import styles from"@/styles/404.module.scss";

export default function Custom404() {
    return (
        <div className={styles.error}>
            <img src="/not-found.jpg" alt="404" className={styles.error__image}/>
            <h1 className="text-3xl font-bold">Halaman tidak ditemukan</h1>
        </div>
    ); 
}