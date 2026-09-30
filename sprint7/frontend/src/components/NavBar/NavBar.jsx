"use client";

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
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
          <Image src={pandaLogo} alt="판다마켓 로고" width={40} height={40} />
          판다마켓
          </Link>

          {!isLandingPage && (
            <nav className={styles.menu}>
              <Link href="/boards" className={onBoard ? styles.menuItemActive : ""}>
              자유 게시판
              </Link>
              <Link href="/items" className={onItems ? styles.menuItemActive : ""}>
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
  )
}