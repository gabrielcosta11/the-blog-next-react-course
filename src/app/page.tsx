import clsx from "clsx";
import { SpinLoader } from "../components/SpinLoader";
import { Suspense } from "react";
import PostsList from "../components/PostsList";
import { Container } from "../components/Container";
import { Header } from "../components//Header";
import Link from "next/link";
import Image from "next/image";
import { PostHeading } from "../components/PostHeading";
import { PostCoverImage } from "../components/PostCoverImage";

export default async function Home() {

  return (
    <Container>
      <Header />

      <section className={clsx('grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group')}>

        <PostCoverImage
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/bryen_2.png',
            alt: "Alt da imagem",
            priority: true
          }} 
          linkProps={{href:'/'}}
        />

        <div className="flex flex-col gap-3 justify-center">
          <time dateTime="2026-02-25" className="text-slate-600 text-sm">
            25/02/2026 22:43
          </time>

          <PostHeading url="#" as="h1">Vero at minus voluptate repudiandae ipsam iure ea totam sint</PostHeading>

          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero at minus voluptate repudiandae ipsam iure ea totam sint, neque eius. Praesentium aliquid dolorem sed labore eius vel alias accusamus ex!
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>Rodapé</p>
      </footer>
    </Container>
  );
}
