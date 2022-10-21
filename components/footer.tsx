import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <a
          href="https://ali.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created By Ali Bouhrouche{' '}
          <span className={styles.logo}>
            <Image src="/iev.svg" alt="iev Logo" width={20} height={20} />
          </span>
        </a>
      </footer>
  )
}

export default Footer