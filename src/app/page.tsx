import clsx from "clsx";
import { SpinLoader } from "../components/SpinLoader";
import { Suspense } from "react";
import PostsList from "../components/PostsList";
import { Container } from "../components/Container";
import { Header } from "../components//Header";

export default async function Home() {

  return (
      <Container>
        <Header />

        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>

        <footer>
          <p className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>Rodapé</p>
        </footer>
      </Container>
  );
}
