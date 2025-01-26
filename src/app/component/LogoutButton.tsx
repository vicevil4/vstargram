"use client";

import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  const handleLogout = async (event: React.FormEvent) => {
    try {
      await signOut();
      // 로그아웃 성공 후의 추가적인 작업을 수행할 수 있습니다.
    } catch (error) {
      console.error('로그아웃 중 오류가 발생했습니다:', error);
      // 로그아웃 실패 시 처리할 작업을 추가할 수 있습니다.
    }
  };

  return (
    <button 
      className="border px-4 py-2 bg-ig-red text-white rounded-lg"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};
