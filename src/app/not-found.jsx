"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="relative h-screen w-screen">
      <section className="body h-full w-full">
        <div class="noise"></div>
        <div class="overlay"></div>
        <div class="terminal flex flex-col justify-center">
          <h1 className="mb-7 text-[35px]">
            Error <span class="errorcode">404</span>
          </h1>
          <div className="flex flex-col space-y-2">
            <p class="output">
              Halaman yang Anda cari mungkin telah dihapus, telah mengalami
              perubahan nama, atau sedang tidak tersedia sementara waktu.
            </p>
            <p class="output">
              silahkan coba{" "}
              <a href="#" onClick={() => router.back()}>
                kembali
              </a>{" "}
              atau <Link href={"/"}>kembali ke beranda</Link>.
            </p>
            <p class="output">semoga berhasil.</p>
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 h-64 w-full bg-gradient-to-b from-transparent to-black"></div>
    </div>
  );
}
