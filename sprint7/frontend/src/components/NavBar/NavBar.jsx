"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as styles from "./NavBar.css.js";

const pandaLogo = "/assets/icons/panda-logo.svg";

export default function NavBar() {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const onBoard = pathname.startsWith("/boards") || pathname === "/addboard";
  const onItems = pathname.startsWith("/items") || pathname === "/registration";

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src={pandaLogo}
              alt="판다마켓 로고"
              className={styles.logoIcon}
              width={40}
              height={40}
            />
            판다마켓
          </Link>

          {!isLandingPage && (
            <nav className={styles.nav}>
              <Link
                href="/boards"
                className={clsx(styles.navLink, onBoard && styles.navLinkActive)}
              >
                자유게시판
              </Link>
              <Link
                href="/items"
                className={clsx(styles.navLink, onItems && styles.navLinkActive)}
              >
                중고마켓
              </Link>
            </nav>
          )}
        </div>
        <button type="button" className={styles.login}>
          로그인
        </button>
      </div>
    </header>
  );
}